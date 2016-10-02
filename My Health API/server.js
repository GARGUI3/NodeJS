//para utilizar express que enruta nuestras direcciones
var express = require('express');
var app = express();
//para la utilizacion de json
var bodyParser = require('body-parser')
//Maneja el loggeo de errores y success
var morgan = require('morgan');
//permite la coneccion de node con mongodb
var mongoose = require('mongoose');
//maneja la tokenizacion
//var jwt = require("jsonwebtoken");
//var secretWord = 'holamundo';
var port = process.env.PORT || 9090;

var User = require('./app/models/users');
var Reminder = require('./app/models/reminders');

//Conexion a base de datos
mongoose.connect('mongodb://localhost:27017/myhealth');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configuracion del CORS
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-request, Authorization');
  next();
});

app.use(morgan('dev'));

var apiRouter = express.Router();

apiRouter.post('/authenticate', function(req, res){
  User.findOne({username: req.body.username}).select('name username password').exec(function(err, user){
    if(err) throw err;
    if(!user){
      res.json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }else if(user){
      var validPassword = user.comparePassword(req.body.password);
      if(!validPassword){
        res.json({
          success: false,
          message: 'Contraseña Incorrecta'
        });
      }else {
        res.json({
          user: user,
          success: true,
          message: 'Logueado Exitosamente',
          //token: token
        });
      }
    }
  });
});

apiRouter.route('/users')
  .post(function(req, res){
     //creamos un nuevo usuario
     console.log("entro");
     var user = new User();
     user.name = req.body.name;
     user.username = req.body.username;
     user.password = req.body.password;

     //Agregamos el usario
     user.save(function(err){
       if(err){
         if(err.code = 11000){
           return res.json({result: false, message: 'El usuario ya existe'});
         }else{
           res.send(err);
         }
       }
       res.json({message: 'Usuario creado'});
     });
  })
  .get(function(req, res){
    //Busca todos los usuarios
    User.find(function(err, users){
      //En caso de error devuelve el error
      if(err) return res.send(err);
      //En caso contrario devuelve los usuario encontrados
      res.json(users);
    });
  });

apiRouter.route('/reminders')
  .post(function(req, res){
      var reminder = new Reminder();
      reminder.user_id = req.body.user_id;
      reminder.title = req.body.title;
      reminder.time = req.body.time;
      reminder.description = req.body.description;
      reminder.type = req.body.type;
      reminder.expirationDate = new Date(req.body.expirationDate);
      reminder.save(function(err){
       if(err){
         res.json({
           success: false,
           message: 'No se pudo guardar el recordatorio'
         });
       }
       res.json({
         success: true,
         message: 'Recordatorio creado correctamente'
       });
     });
  })


  apiRouter.route('/reminders/:user_id')
    .get(function(req, res){
        var today = new Date();
        console.log(today)
        Reminder.find({user_id: req.params.user_id, expirationDate: {'$gte': today}}, function(err, reminders){
          if(err) return res.send(err);
          res.json(reminders);
        });
    })

    apiRouter.route('/reminders/:user_id/:time')
      .get(function(req, res){
          var today = new Date();
          console.log(today)
          Reminder.find({user_id: req.params.user_id, time: req.params.time, expirationDate: {'$gte': today}}, function(err, reminders){
            if(err){
              res.json({success: false, message: 'Ha ocurrido un error'})
            }
            if(reminders.length===0){
              var datos = {
                'success': true,
                'time': false
              }
              res.json(datos);
            }else {
              var datos = {
                'success': true,
                'time': true
              }
              res.json(datos);
            }

          });
      })

app.use('/api', apiRouter);

app.listen(port);
console.log('Todo funcionando perfectamente');

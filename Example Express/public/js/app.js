angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function(){
  var vm = this;
  vm.bigMessage = 'Index';
})

.controller('homeController', function(){
  var vm = this;
  vm.message = 'Home';
})

.controller('aboutController', function(){
  var vm = this;
  vm.message = 'About';
})

.controller('contactController', function(){
  var vm = this;
  vm.message = 'Contact';
})

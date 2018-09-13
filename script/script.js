//define angular
var myApp = angular.module('myApp',['ngRoute','ngAnimate','ngTouch',]);
//routes
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'pages/home.html',
          controller: 'homeCrt'
    })
    
        .when('/about', {
          templateUrl:'pages/about.html',
          controller:'aboutCrt'
    })
    
        .when('/gallery', {
          templateUrl:'pages/gallery.html',
          controller:'galleryCrt'
    })
    
        .when('/contact', {
          templateUrl:'pages/contact.html',
          controller:'contactCrt'
    })
    
    .when('/index', {
        templateUrl:'index.html',
        controller:'indexCtr'
    })
});
//controllers
myApp.controller('indexCtr',['$scope',function($scope) {
    
    $scope.slide1 = ' 0669122914';
    $scope.slide2 = 'restoran.kostic@gmail.com';
    
}]);

myApp.controller('homeCrt',['$scope',function($scope) {
  
}]);

myApp.controller('aboutCrt',['$scope',function($scope) {
    
}]);

myApp.controller('galleryCrt',['$scope','$sce',function($scope,$sce) {
   $scope.photos = [{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  },{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  },{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  },{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  },{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  },{
    fullres: 'img/slika1.jpg',
    thumbnail: 'img/slika1a.jpg'
  }, {
    fullres: 'img/slika2.jpg',
    thumbnail: 'img/slika2a.jpg'
  }, {
    fullres: 'img/slika3.jpg',
    thumbnail: 'img/slika3a.jpg'
  }, {
    fullres: 'img/slika4.jpg',
    thumbnail: 'img/slika4a.jpg'
  }];

  for (var i = 0; i < $scope.photos.length; i++) {
    $scope.photos[i].fullres = $sce.trustAsResourceUrl($scope.photos[i].fullres);
  }
}]);

myApp.controller('contactCrt',['$scope','$http',function($scope,$http) {

    $scope.form = {name: "",email:"",message:""};
    $scope.submit = function() {
      var config = {
        method:'POST',
        url:'index.php',
        data: {
          'name' : $scope.form.name,
          'email' : $scope.form.email,
          'message' : $scope.form.message
        }
      };
      var request = $http(config);
        request.then(function(response) {
        $scope.msg = response.data;
      },function(error){
        $scope.msg = error.data;
      });
    }


}]);
//lightgallery directive
myApp.directive('lightgallery', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.$last) {
        element.parent().lightGallery();
      }
    }
  };
})

$('.carousel').carousel({
  interval: 500
});
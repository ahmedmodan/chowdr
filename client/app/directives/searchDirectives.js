angular.module('tinnr.searchDirectives', ['tinnr.recipes', ])
  .directive('searchbar', ['Recipes', function (Recipes) {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_search.html',
      controller: function ($scope) {
        $scope.preferences = {};
        $scope.getRecipes = function () {
          Recipes.getRecipes($scope.preferences)
            .then(function (data) {

            })
            .catch(function (error) {
              console.error('Error fetching recipes: ', error);
            });
        };
      }
    };
  }]);

module app.directives {

  "use strict";

  import SearchCtrl = app.SearchCtrl;

  angular.module("app.directives").directive("searchFilterButtons", () => {
    return {
      restrict: "E",
      templateUrl: "/SPA/views/filterButtons.html",
      controller: SearchCtrl,
      controllerAs: "SearchCtrl"
    }
  });
}
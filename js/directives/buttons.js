currencyApp.directive('backtohome', function () {
    return {
        restrict: 'E',
        template: '<div class="button-styles" id="home" ><a href="#/home"  class=" btn button button-medium center-block bottom-button button-text" title="Back to HOME"><i class="fa fa-home fa-1x "></i><span class="input-sm ">Back to Home</span></a></div>',
     };
});
currencyApp.directive('backonestep', function () {
    return {
        restrict: 'E',
        template: '<div class="button-styles"><a href="" class=" btn button button-medium center-block bottom-button button-text" title="Back one step"><i class="fa fa-chevron-left"></i><span class="input-sm ">Back one Step</span></a></div>',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                history.back();
                scope.$apply();
            });
        }
    };
});
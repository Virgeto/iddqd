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
// currencyApp.directive('validateEmail', function() {
//   var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//   return {
//     require: 'ngModel',
//     restrict: 'A',
//     link: function(scope, elm, attrs, ctrl) {
//       // only apply the validator if ngModel is present and Angular has added the email validator
//       if (ctrl && ctrl.$validators.email) {

//         // this will overwrite the default Angular email validator
//         ctrl.$validators.email = function(modelValue) {
//           return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
//         };
//       }
//     }
//   };
// });



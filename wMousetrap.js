/**
 * Mousetrap wrapper for AngularJS
 * @version v0.1.0 - 2015-11-30
 * @link https://github.com/mgonto/mgo-mousetrap
 * @author Martin Gontovnikas <martin@gon.to>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('mgo-mousetrap', []).directive('wMousetrap', function () {
    return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs',
                     function ($scope, $element, $attrs) {
            
            var mousetrap;

            $scope.$watch($attrs.wMousetrap, function(_mousetrap) {
                mousetrap = _mousetrap;

                for (var key in mousetrap) {
                    if (mousetrap.hasOwnProperty(key)) {
                        Mousetrap.unbind(key);
                        Mousetrap.bind(key, applyWrapper(mousetrap[key])); 
                    }
                }
            }, true);

            function applyWrapper(fnc) {
                var func = fnc[0] || fnc,
                    params = [];
                if (angular.isArray(fnc)) {
                    fnc.shift();
                    params = fnc;
                }
                return function(e) {
                    $scope.$apply(function() {
                        func(e, params);
                    });
                };
            }
            
            $element.bind('$destroy', function() {
                if (!mousetrap) return;

                for (var key in mousetrap) {
                    if (mousetrap.hasOwnProperty(key)) {
                        Mousetrap.unbind(key);
                    }
                }
            });

        }]
    }
});

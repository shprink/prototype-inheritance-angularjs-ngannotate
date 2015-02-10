require('angular');
var augment = require("augment");

module.exports = app = angular.module('app', [])


var Child1Ctrl = require('./Child1.js');

var Child2Ctrl = augment(Child1Ctrl, function(child1Ctrl) {
    this.constructor = function($scope, $log) {
        child1Ctrl.constructor.call(this, $scope, $log);
        this.commonMethod1();
        this.child1Method1();
        this.child1Method2();
    };
    this.child1Method2 = function() {
        this.$log.info('child1Method2');
    };
    this.commonMethod1 = function(event) {
        this.$log.info('commonMethod1 from child2');
    };
});


/**
The result will dump the following in the console:
commonMethod1 from child2
child1Method1
child1Method2
*/

// app.controller('Child2Ctrl', /* @ngInject */ Child2Ctrl); // does not work :(
app.controller('Child2Ctrl', ['$scope', '$log', Child2Ctrl]);
app.run(function($log) {
    $log.info('running');
})
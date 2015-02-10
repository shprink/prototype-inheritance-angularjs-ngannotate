var augment = require("augment");
var CommonCtrl = require('./Common.js');
module.exports = augment(CommonCtrl, function(commonCtrl, $scope, $log) {
    this.constructor = function($scope, $log) {
        commonCtrl.constructor.call(this, $scope, $log);
    };
    this.child1Method1 = function() {
        this.$log.info('child1Method1');
    };
    this.commonMethod1 = function(event) {
        this.$log.info('commonMethod1 from child1');
    };
});
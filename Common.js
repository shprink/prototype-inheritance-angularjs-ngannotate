var augment = require("augment");
module.exports = augment.defclass({
    constructor: function($scope, $log) {
        this.$scope = $scope;
        this.$log = $log;
    },
    commonMethod1: function(event) {
        this.$log.info('commonMethod1');
    }
});
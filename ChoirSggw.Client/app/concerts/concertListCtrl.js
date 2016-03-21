(function () {
    "use strict";

    angular
        .module("concertManagment")
        .controller("concertListCtrl", ["concertResource", concertListCtrl]);

    function concertListCtrl(concertResource) {
        var vm = this;

        concertResource.query(function (data) {
            vm.concerts = data;
        });
    }
}());

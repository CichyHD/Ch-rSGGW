(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("concertResource",
                ["$resource",
                 "appSettings",
                    concertResource])

    function concertResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/Concert/:id");
    }
})();
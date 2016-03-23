'use strict';

eventsApp.controller('ConcertController',
    function ConcertController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: "Warszawa",
                city: "Warszawa",
                province: "Ursynów"
            },
            imageUrl: 'http://static1.money.pl/i/moto/galerie/33/1590/1/0.medium.jpg',
            sessions: [
                {
                    name: "Directives Masterclass",
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    upVoteCount: 0
                },
                {
                    name: 'Some anoother',
                    upVoteCount: 0
                }
            ]

        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);
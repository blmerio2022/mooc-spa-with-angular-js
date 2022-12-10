
console.log("Hi Coursera!");

( function (){
    // to make sure we dont make any careless mistake
    'use strict';


    // Module to controle the view "MyFirstApp"
    angular.module("MyFirstApp",[])
        
        // Controller to controle the part of view "MyFirstController"
        .controller("MyFirstController", function(){
            console.log("Hello Boulmane!");
        });

    }
)();

/**
* Generated On: 2017-5-16
* Class: Registered
*/

var User = require('User');

var User = require('User');

function Registered(){
    //Constructor

    this.email = null;
    this.school = null;

}

Registered.prototype = new User();
Registered.prototype = new User();

/**
* @param Beacon {} 
* @return {null}
*/
Registered.prototype.joinLobby = function(Beacon){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Registered.prototype.leaveLobby = function(){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Registered.prototype.hostLobby = function(){
    //TODO: Implement Me 

};



module.exports = {Registered:Registered};
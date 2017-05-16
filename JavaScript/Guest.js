/**
* Generated On: 2017-5-16
* Class: Guest
*/

var User = require('User');

function Guest(){
    //Constructor


}

Guest.prototype = new User();

/**
* @param Beacon {} 
* @return {null}
*/
Guest.prototype.joinLobby = function(Beacon){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Guest.prototype.leaveLobby = function(){
    //TODO: Implement Me 

};



module.exports = {Guest:Guest};

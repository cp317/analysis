/**
* Generated On: 2017-5-16
* Class: Host
*/

var Beacon = require('Beacon');

var Registered = require('Registered');

function Host(){
    //Constructor

    this.username = null;
    this.beaconID = null;

}

Host.prototype = new Registered();

/**
* @return {null}
*/
Host.prototype.leaveLobby = function(){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Host.prototype.closeLobby = function(){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Host.prototype.extendLobby = function(){
    //TODO: Implement Me 

};


/**
* @return {null}
*/
Host.prototype.relocateLobby = function(){
    //TODO: Implement Me 

};



module.exports = {Host:Host};
const express = require('express');
const { ROLE } = require('../src/models/data');

function canViewGame(user, game){
    return (
        user.role === ROLE.ADMIN ||
        game.userID === user.id
    )
}

//To authorize to display game detaile accordingly
function specificGame(user, games){
    if(user.role === ROLE.ADMIN){
        return games
    }
    else{
        return games.filter(game => game.userID == user.id);
    }
}

//To authorize user to display user details accordingly
function specificUser(user,users){
    if(user.role === ROLE.ADMIN){
        return users
    }
    else{
        return user;
    }
}

module.exports.canViewGame = canViewGame;
module.exports.specificGame = specificGame;
module.exports.specificUser = specificUser;

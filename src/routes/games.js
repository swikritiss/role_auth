const express = require('express');
const router = express.Router();
const { canViewGame, specificGame, specificUser } = require('../../permissions/games');
const { ROLE, games, users } = require('../models/data');
const { authUser, authRole } = require('../Auth/basicAuth');



//get all games, you have to sign in
router.get('/', authUser, (req,res) => {
    const displayUsers = specificUser(req.user, users);
    const displayGames = specificGame(req.user, games);
    res.json({Users : displayUsers, Games : displayGames})
})

//get single game, shows user and game details
router.get('/:gameID', setGame, authUser, authGetGame, (req,res) => {
    const result = {
        User : req.user,
        Game : req.game
    }
    res.json({Details : result})
})

//middleware for selecting the game required
function setGame(req,res,next){
    const gameID = parseInt(req.params.gameID);
    req.game = games.find(game => game.id === gameID)

    if(req.game == null){
        return res.status(404).send('Game not found');
    }
    next();
}

//middleware for authorization
function authGetGame(req,res,next){
    if(!canViewGame(req.user, req.game)){
        res.send('Not Admin so Not Allowed');
    }
    next();
}

module.exports = router;
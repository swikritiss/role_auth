ROLE = {
    ADMIN : "admin",
    BASIC : "basic"
}

userData = {
    ROLE :  ROLE,
    users : [
        {id : 1, name : 'swikriti', role :  ROLE.ADMIN},
        {id : 2, name : 'bhutututut', role :  ROLE.BASIC},
        {id : 3, name : 'imposter', role :  ROLE.BASIC}
    ],
    games : [
        {id : 1, name : 'counterstrike', userID : 1},
        {id : 2, name : 'pubg', userID : 2},
        {id : 3, name : 'amongus', userID : 3},
    ]
}


module.exports = userData;
module.exports.ROLE = ROLE;
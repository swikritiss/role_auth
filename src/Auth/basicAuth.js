const { ROLE } = require('../models/data');

function authUser(req,res,next){
    if(req.user == null){
        res.send('Need To Sign In');
    }
    next(); 
}

//to check if signed user is admin or not
function authRole(req,res,next){
    if(req.user.role !== ROLE.ADMIN){
        res.send('Not an admin');
    }
    next();
}

module.exports.authUser = authUser;
module.exports.authRole = authRole;

const bodyParser = require('body-parser');
const express = require('express');
const gamesRoute = require('./src/routes/games');
const { authUser, authRole } = require('./src/Auth/basicAuth');
const { ROLE, users } = require('./src/models/data');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(setUser);
app.use('/games', gamesRoute);

app.get('/', (req,res) => {
    res.send('Home Page');
})

//only those signed in can see the dashboard page
app.get('/dashboard', authUser, (req,res) => {
    res.send('Dashboard Page');
})

app.get('/admin', authUser, authRole, (req, res) => {
    res.send('Admin Page');
})

function setUser(req,res,next){
    const userID = req.body.userID;         //use userID as input
    if(userID){
        req.user = users.find(user => user.id === userID)
    }
    next();
}

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})
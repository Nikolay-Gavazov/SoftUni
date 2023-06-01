const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.urlencoded({extended: false}));

const users = {};

//Authentication is an important part of application security
//--It serves to verify whether the client is who or what it declares itself to be.
//--It's built on several layers of abstraction
//--Cookies -> Sessions -> Security
//--Authentication is a cross-cutting concern, best handled away from business logic.
//--Request -> Authentication -> Business Logic -> Response

//Authorization
//--The process of determining what a user is permitted to do on a computer or network

//Authentication and hash

app.get('/', (req, res) => {
    res.send(users)
});

app.get('/register', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/register" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <label for="password">Password</label>
        <input type="text" name="password" id="password">
        <input type="submit" value="Register">
    </form>
</body>
</html>
    `)
});

app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(3);
    const hash = await bcrypt.hash(password, salt);

    users[username] = {
        password: hash
    };

    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/login" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <label for="password">Password</label>
        <input type="text" name="password" id="password">
        <input type="submit" value="Login">
    </form>
</body>
</html>
    `)
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    const hash = users[username]?.password;
    const isValid = await bcrypt.compare(password, hash);

    if(isValid){
        res.send('Successfull Login')
    }else{
        res.send('Password or Username dont match')
    }
    
})

app.listen(3000, () => console.log('server is listening on port 3000'))
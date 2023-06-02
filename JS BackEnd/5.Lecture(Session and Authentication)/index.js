const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('./jwt-custom');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
const secret = 'lapamChushki';

const users = {};

//JSON Web Token(JWT) is an open standart that defines a compact
//and self-contained way for securely transmitting information
//between parties as a JSON object
//--This information can be verified and trusted because it is digitally signed
//--JWTs can be signed using a secret or a public/private key
//pair using RSA or ECDSA
//--JSON Web Tokens are useful for Authorization and
//Information Exchange

app.get('/', (req, res) => {


    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <header>
    <nav>
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/profile">Profile</a>
    </nav>
</header>
        <h1>Home Page</h1>
    </body>
    </html>
        `)
});

app.get('/verify/:token', (req, res) => {
    const token = req.params.token;
    const payload = jwt.verify(token, 'NotSoSecretButSecret');

    res.send(payload)
})

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
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/profile">Profile</a>
    </nav>
</header>
<h1>Register Page</h1>
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
    let _id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
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
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/profile">Profile</a>
    </nav>
</header>
<h1>Login Page</h1>
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
        const payload = { username }
        try {
            const token = await jwt.sign(payload, secret, { expiresIn: '2d'});
            res.cookie('token', token);
            res.redirect('/profile');
        } catch (error) {
            res.redirect('/404');
        }
    }else{
        res.status(401).send('Password or Username dont match')
    }
    
})

app.get('/profile', async(req, res) => {
    const token = req.cookies.token;

    if(token){
        try {
            const payload = await jwt.verify(token, secret);

            return res.send(`<p>Hello ${payload.username} </p>`)
        } catch (error) {
            return res.status(401).send('Unauthorized');
        }
    }else{
        res.redirect('/login');
    }
})

app.listen(3000, () => console.log('server is listening on port 3000'))
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'User secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}));

//create and set cookie native option

// app.get('/', (req, res) => {
//     let id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));;

//     const cookie = req.headers.cookie;
//     if(cookie){
//         const [key, value] = cookie.split('=');
//         id = value;
//     }else{
//         res.header('Set-Cookie', `userId=${id}`);
//     }
//     res.send(`Hello User - ${id}`);
// });

//create and set cookie with cookie-parser

// app.get('/', (req, res) => {
    
//     const userId = req.cookies.userId;
//     if(userId){
//         id = userId;
//     }else{
//         let id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));;
//         res.cookie('userId', id);
//     }
//     res.send(`Hello User - ${id}`);
// });

// app.listen(3000, () => console.log('server is listening on port 3000'))


//create and set session with express-session

app.get('/', (req, res) => {
    
    const userId = req.cookies.userId;
    if(userId){
        id = userId;
        console.log(req.session.secret);
    }else{
        let id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));;
        req.session.secret = `${id} - user secret`
        res.cookie('userId', id);
    }
    res.send(`Hello User - ${id}`);
});

app.listen(3000, () => console.log('server is listening on port 3000'))
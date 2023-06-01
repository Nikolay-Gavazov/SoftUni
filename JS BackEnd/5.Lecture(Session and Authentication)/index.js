const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

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

app.get('/', (req, res) => {
    
    const userId = req.cookies.userId;
    if(userId){
        id = userId;
    }else{
        let id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));;
        res.cookie('userId', id);
    }
    res.send(`Hello User - ${id}`);
});

app.listen(3000, () => console.log('server is listening on port 3000'))
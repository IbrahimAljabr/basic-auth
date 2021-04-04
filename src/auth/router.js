'use strict';

const express = require('express');
const router = express.Router();

const app = express();



router.post('/',signup );


function signup(req, res) {
    console.log('req',req);
    res.status(201).json('record');

}



// app.post('/signup', (req, res) => {
//     console.log('req',req);
//     res.status(201).json('record');  
//   });


// router.post('/signin', (req, res) => {

//     console.log('__HEADERS__', req.headers.authorization);
//     const encoded = req.headers.authorization.split(' ')[1];
//     console.log('__ENCODED___', encoded);
//     const decoded = base64.decode(encoded);
//     console.log('__DECODED__', decoded);
//     const [username, password] = decoded.split(':');
//     console.log('__USERNAME__', username, '__Password__', password);
//     try {
//       const user = await Users.findOne({ username });
//       console.log('__DB_RECORD__', user);
//       const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         res.json(user);
//       } else {
//         res.status(401).json({ error: 'Invalid User/Password' });
//       }
//     } catch (error) {
//       res.status(401).json({ error: error.message });
//     }
// });


module.exports = router;
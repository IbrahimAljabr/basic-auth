'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');




async function signup(req, res, next) {
    
    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new Users({ username, password: hash });
        const record = await user.save();
        req.record=record;
        next();
      } catch (error) {
        res.status(403).json({ error: error.message});
        next('');
      }

}


// async function signin(req, res, next) {
    
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
//       next();
//     } catch (error) {
//       res.status(401).json({ error: error.message });
//       next();
//     }
// }




module.exports = signup;
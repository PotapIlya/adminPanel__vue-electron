// const authService = require('./../../services/auth/authService');
// const tokenService = require('./../../services/auth/tokenService');
// const { validationResult } = require('express-validator');
// const apiError = require('./../../exeptions/apiError')
// const roomsService = require('./../services/roomsService')
const fs = require('fs');

class DatabaseController
{
    async create(req, res, next){
        try {
            fs.writeFile(`database/json/${req.body.name}.json`, JSON.stringify(req.body), (err, result) => {
                if(err) console.log('error', err);
            });
            return res.json(req.body);
        } catch (e) {
            next(e);
        }
    }


}


module.exports = new DatabaseController();

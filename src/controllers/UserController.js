const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

// C=Create
exports.CreateUser = (req, res) => {
    let reqBody = req.body;

    const formData = {
        name: reqBody['name'] || '',
        username: reqBody['username'] || '',
        password: reqBody['password'] || '',
        type: reqBody['type'] || ''
    }
    
    // Make hash password
    const salt = bcrypt.genSaltSync(10);
    formData.password = bcrypt.hashSync(formData.password, salt);

    UserModel.create(formData, (err, data) => {
        if (err) {
            res.status(400).json({status: 'fail', error: err})
        } else {
            data.password = undefined;  //not showing password in response body
            res.status(201).json({
                status: 'success',
                message: 'User created successfully',
                data: {data}
            })
        }
    })
}

// R=Read
exports.ReadUser = (req, res) => {
    let Query = {};
    let Projection = {
        'name': 1,
        'username': 1,
        'type': 1,
        '_id': 0
    }
    UserModel.find(Query, Projection, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}

// U=Update
exports.UpdateUser = (req, res) => {
    let id = req.params.id;
    let QUERY = {
        _id: id
    }
    let reqBody = req.body;

    UserModel.updateOne(QUERY, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}

// D=Delete
exports.RemoveUser = (req, res) => {
    let id = req.params.id;
    let QUERY = {
        _id: id
    }
    UserModel.remove(QUERY, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}

// User login
exports.UserLogin = (req, res) => {
    let reqBody = req.body;
    const formData = {
        username:reqBody['username'] || '',
        password:reqBody['password'] || '',
    }
    UserModel.findOne( { username: formData.username }, (err, data) => {
        if (err){
            return res.status(401).json({status: "fail", message: 'Incorrect Credentials'})
        }else {
            if (data !== null) {
                if (! bcrypt.compareSync(formData.password, data.password)) {
                    return res.status(401).json({status: "fail", message: 'Incorrect Credentials'})
                } else {
                    let userData = data;
                    userData.password = undefined;

                    let Payload = {
                        exp: Math.floor(Date.now() / 1000) + (72 * 60 * 60),
                        data: data[0]
                    }
                    let token = jwt.sign(Payload, 'GYM@2022');

                    res.status(200).json({status: "success", token: token, data: data[0]})
                }
            } else {
                res.status(401).json({status: "fail", message: 'Incorrect Credentials'});
            }
        }
    })
}

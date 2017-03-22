const createUserModel = require('../../../models/users/createUser.js');
const socialLogin = require('../../../services/helpers/googleAuth.js');
let createUser = function(req, res) {
    let callUserModel = (token) => {
        user = {
            userId: token || req.body.email,
            userType: req.body.userType,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password || null,
            firstName: req.body.firstName || null,
            lastName: req.body.lastName || null,
        }
        createUserModel.createUser(user)
            .then((result) => {
                    res.end(JSON.stringify({ 'user': result.user, 'created': result.created }));
                },
                (error) => {
                    console.log(error);
                });
    };
    let user = {};
    if (req.method.toString() == 'PUT') {
        if (user.userType != 'email') {
            socialLogin.verifyGoogleUser(req.body.token, callUserModel);
        } else {
            callUserModel();
        }
    } else {
        res.end('bad request');
    }
};

module.exports = createUser;

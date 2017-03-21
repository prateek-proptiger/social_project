//node module
const path = require("path");

//built in globals
const LOGGER = require('../services/logger');
const ROOTPATH = path.join(__dirname, '../');
const PROJECTROOTPATH = path.join(__dirname, '../../');

module.exports = {
    ROOTPATH,
    LOGGER,
    PROJECTROOTPATH
}

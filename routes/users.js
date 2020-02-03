const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/users');
const router = express.Router();

//auth ko lahi below..
// const auth = require('../auth');

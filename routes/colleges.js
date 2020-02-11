const express = require('express');
const router = express.Router();
const College = require('../model/colleges');






router.get('/colleges', function(req, res, next){
    College.find({}).then(function(colleges){
        res.send(colleges);
    });
});

router.post('/colleges', function(req, res, next){
    College.create(req.body).then(function(college){
        res.send(college);
    }).catch(next);
});

router.put('/colleges/:id', function(req, res, next){
    College.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        College.findOne({_id: req.params.id}).then(function(college){
            res.send(college);
        });
    });
});

router.delete('/colleges/:id', function(req, res, next){
    College.findByIdAndRemove({_id: req.params.id}).then(function(college){
        res.send(college);
    });
});

// router.get('/getcolleges', function(req, res, next){
//     College.find({}).then(function(colleges){
//         res.send(colleges);
//     });
// });

// router.post('/postcolleges', function(req, res, next){
//     College.create(req.body).then(function(college){
//         res.send(college);
//     }).catch(next);
// });

// router.put('/putcolleges/:id', function(req, res, next){
//     College.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
//         College.findOne({_id: req.params.id}).then(function(college){
//             res.send(college);
//         });
//     });
// });

// router.delete('/deletecolleges/:id', function(req, res, next){
//     College.findByIdAndRemove({_id: req.params.id}).then(function(college){
//         res.send(college);
//     });
// });

module.exports = router;
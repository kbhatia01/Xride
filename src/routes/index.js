const express = require('express');
const router = express.Router();
const data = require('../Data/dataAccessor')

/* GET home page. */




router.post('/location-data', async function (req, res, next) {
  let promiseArray = [];
  promiseArray.push(
    data.insertToBooking([req.body.id, req.body.user_id, req.body.vehicle_model_id]));
  await Promise
    .all(promiseArray).then(resp => {
      res.status(200).json({ mesage: resp });

    }).catch(err => {
      console.error(err);
      res.status(500).json({ err: err });
    });

});


module.exports = router;

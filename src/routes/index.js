const express = require('express');
const router = express.Router();
const data = require('../Data/dataAccessor')
const Utils = require('../Utils/Utils');
/* GET home page. */



router.use('/location-data', function (req, res, next) {
  Utils.checkValidRequest(req, res, next);
})
router.post('/location-data', async function (req, res, next) {
  let promiseArray = [];
  promiseArray.push(
    data.insertToBooking([req.body.id, req.body.user_id, req.body.vehicle_model_id])
  );
  promiseArray.push(data.insertToBookingDetails(
    [req.body.id, (req.body.package_id), req.body.travel_type_id, req.body.from_date, req.body.to_date, req.body.online_booking, req.body.mobile_site_booking, req.body.booking_created, req.body.car_cancellation])
  )

  promiseArray.push(data.insertToBookingLocation(
    [req.body.id, req.body.from_area_id, req.body.to_area_id, req.body.from_city_id, req.body.to_city_id, req.body.from_lat, req.body.to_lat, req.body.from_long, req.body.to_long]
  ))
  await Promise
    .all(promiseArray).then(resp => {
      res.status(201).json({ status: 201, mesage: "Data Inserted!" });

    }).catch(err => {
      console.error(err);
      res.status(500).json({ status: 500, err: "Error Inserting Data", details: err.detail });
    });

});


module.exports = router;

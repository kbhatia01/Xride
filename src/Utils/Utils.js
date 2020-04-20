Utils.prototype.checkValidRequest = function (req, res, next) {
    if (!req.body) {
        return res.status(400).json({ status: 400, err: "no body found required!!" });
    }
    if (!req.body.id) {
        return res.status(400).json({ status: 400, err: "id required!!" })
    }

    if (!req.body.vehicle_model_id) {
        return res.status(400).json({ status: 400, err: "travel_type_id required!!" })
    }
    if (!req.body.from_area_id) {
        return res.status(400).json({ status: 400, err: "from_area_id required!!" })
    }
    if (!req.body.from_date) {
        return res.status(400).json({ status: 400, err: "from_date required!!" })
    }
    if (!req.body.booking_created) {
        return res.status(400).json({ status: 400, err: "booking_created date required!!" })
    }
    if (!req.body.from_lat) {
        return res.status(400).json({ status: 400, err: "from_lat required!!" })
    }
    if (!req.body.from_long) {
        return res.status(400).json({ status: 400, err: "from_long required!!" })
    }
    if (!req.body.package_id) {
        req.body.package_id = null;
    }
    if (!req.body.package_id) {
        req.body.package_id = null;
    }
    if (!req.body.package_id) {
        req.body.package_id = null;
    }
    if (!req.body.from_city_id) {
        req.body.from_city_id = null;
    }
    if (!req.body.to_city_id) {
        req.body.to_city_id = null;
    }

    if (!req.body.to_date) {
        req.body.to_date = null;
    }
    if (!req.body.to_date) {
        req.body.to_date = null;
    }
    if (!req.body.online_booking) {
        req.body.online_booking = 0;
    }
    if (!req.body.mobile_site_booking) {
        req.body.mobile_site_booking = 0;
    }

    if (!req.body.to_lat) {
        req.body.to_lat = null;
    }
    if (!req.body.to_long) {
        req.body.to_long = null;
    }
    if (!req.body.Car_Cancellation) {
        req.body.Car_Cancellation = 0;
    }
    next();
}

function Utils() { }

module.exports = new Utils();

const SqlClient = require('./resource/SQL').client;

DataAccessor.prototype.insertToBooking = async (data) => {
    const stmt = {
        text: "insert into Booking (id , user_id , vehicle_model_id) values ($1, $2,$3)",
        values: data
    }
    return SqlClient.query(stmt);
}

DataAccessor.prototype.insertToBookingLocation = async (data) => {
    const stmt = {
        text: "insert into BookingLocation(booking_id, from_area_id, to_area_id ,from_city_id , to_city_id ,from_lat ,to_lat ,from_long ,to_long) values ($1, $2,$3,$4,$5,$6,$7,$8,$9)",
        values: data
    }
    return SqlClient.query(stmt);
}


DataAccessor.prototype.insertToBookingDetails = async (data) => {
    const stmt = {
        text: "insert into BookingDetails(booking_id, package_id, travel_type_id ,from_date , to_date ,online_booking ,mobile_site_booking ,booking_created ,car_cancellation) values ($1, $2,$3,$4,$5,$6,$7,$8,$9)",
        values: data
    }
    return SqlClient.query(stmt);
}

function DataAccessor() { }

module.exports = new DataAccessor();
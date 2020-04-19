
const SqlClient = require('./resource/SQL').client;

DataAccessor.prototype.insertToBooking = async (data) => {
    stmt = `insert into Booking (id , user_id , vehicle_model_id) values ?`
    return SqlClient.query(stmt, data).catch(err => {
        return err;
    });
}

function DataAccessor() { }

module.exports = new DataAccessor();
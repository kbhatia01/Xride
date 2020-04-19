
const SqlClient = require('./resource/SQL').client;

DataAccessor.prototype.insertToBooking = async (data) => {
    const stmt = {
        text: "insert into Booking (id , user_id , vehicle_model_id) values ($1, $2,$3)",
        values: data
    }
    return SqlClient.query(stmt);
}

function DataAccessor() { }

module.exports = new DataAccessor();
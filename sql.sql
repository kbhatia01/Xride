create table BookingLocation(booking_id int Not null, from_area_id int, to_area_id int,from_city_id int, to_city_id int,from_lat decimal,to_lat decimal,from_long decimal,to_long decimal);

create table BookingDetails(booking_id int Not null, from_area_id int, to_area_id int,from_city_id int, to_city_id int,from_lat decimal,to_lat decimal,from_long decimal,to_long decimal);
create table Booking(id int Primary Key, user_id int, vehicle_model_id int);      
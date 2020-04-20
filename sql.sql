create table BookingLocation(booking_id int Not null, from_area_id int, to_area_id int,from_city_id int, to_city_id int,from_lat decimal,to_lat decimal,from_long decimal,to_long decimal);

create table Booking(id int Primary Key, user_id int, vehicle_model_id int);      


create table BookingDetails(booking_id int not null, package_id int, travel_type_id int,from_date date, to_date date,online_booking boolean,mobile_site_booking boolean,booking_created boolean,car_cancellation boolean);


SELECT * FROM booking INNER JOIN BookingLocation ON BookingLocation.booking_id = booking.id INNER JOIN bookingDetails ON BookingLocation.booking_id = BookingDetails.booking_id;
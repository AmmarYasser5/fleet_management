CREATE DATABASE Fleet_management;

use Fleet_management;

CREATE TABLE Users(
UserId int primary key,
UserName varchar(50) not null,
User_Password varchar(50) not null UNIQUE,
User_email varchar(50) not null UNIQUE
);

CREATE TABLE Drivers(
Driver_Id int primary Key,
Driver_fname varchar(50) not null,
Driver_lname varchar(50) not null,
License_num varchar(50) not null UNIQUE,
Contact_num varchar(50) not null UNIQUE,
Driver_status varchar(50) 
);

CREATE TABLE Vehicles(
Vehicle_Id int primary key,
Vehicle_name varchar(100) not null,
Vehicle_model varchar(50) not null,
Vehicle_made_in varchar(50) not null,
Vehicle_year int not null,
Registration_num varchar(50) not null UNIQUE,
Vehicle_status varchar(50) 
);

CREATE TABLE Geo_Fences(
Geo_Id int primary key,
Geo_name varchar(100) not null,
Latitude decimal,
Longitude decimal,
Radius decimal
);

CREATE TABLE Geo_Fence_Events(
Event_Id int primary key,
Event_type varchar(50),
Event_datetime datetime,
Geo_Id int foreign key references Geo_Fences(Geo_Id),
Vehicle_Id int foreign key references Vehicles(Vehicle_Id)
);

CREATE TABLE Bookings(
Booking_Id int primary key,
Booking_start_date datetime,
Booking_end_date datetime,
Booking_status varchar(50),
UserId int foreign key references Users(UserId),
Driver_Id int foreign key references Drivers(Driver_Id),
Vehicle_Id int foreign key references Vehicles(Vehicle_Id)
);

CREATE TABLE Fuel_Records(
Record_Id int primary key,
Quantity decimal,
Cost decimal,
Refueling_date date,
Vehicle_Id int foreign key references Vehicles(Vehicle_Id)
);

CREATE TABLE Maintenance_Tasks(
Task_Id int primary key,
Task_description text not null,
Task_date date not null,
Task_status varchar(50),
Vehicle_Id int foreign key references Vehicles(Vehicle_Id)
);

CREATE TABLE Reports(
Report_Id int primary key,
Report_type varchar(50),
Report_data text,
Repo_generated_at datetime,
UserId int foreign key references Users(UserId)
);

Insert into Drivers (Driver_Id,Driver_fname,Driver_lname,License_num,Contact_num) 
values (1,'Mohmoud','Ismael','22404260500698','01233654797')

Insert into Drivers (Driver_Id,Driver_fname,Driver_lname,License_num,Contact_num) 
values (2,'Khalil','Kamal','20405665700856','01550656889')

Insert into Drivers (Driver_Id,Driver_fname,Driver_lname,License_num,Contact_num) 
values (3,'Fady','Azmy','15564260200869','01570112589')

Insert into Drivers (Driver_Id,Driver_fname,Driver_lname,License_num,Contact_num) 
values (4,'Mohamed','zaki','15564260200587','01119665433')

Insert into Drivers (Driver_Id,Driver_fname,Driver_lname,License_num,Contact_num) 
values (5,'Samir','Osama','23505260200702','01008505400')









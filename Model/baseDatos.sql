create database Zentry;

use Zentry;

create table User (
id int primary key auto_increment, 
email varchar(200) not null,
username varchar(50) not null,
age int not null,
password varchar(50) not null,
check (char_length(password) > 8), 
role boolean
);



create table Events (
id int primary key auto_increment,
Titulo varchar(100) not null,
Categoria varchar(50) not null,
fecha date not null,
hora time not null,
ubicación varchar(200) not null,
descripcion text not null,
imagen varchar(200) not null
);
"use strict";

// const fecha = Date;

// console.log(fecha())

//date es un constructor
// const fecha = Date().__proto__;
// const fecha = new Date();//si saaco el new me da eerror


//nos muestra el dia del mes en que estamos
// console.log(fecha.getDate())

//nos muestra el dia de la semana
// console.log(fecha.getDay())


//nos muestra el mes del la año siempre 1año menos
// console.log(fecha.getMonth())


//nos muestra la fecha actual - 1900  ||  para saber el año acual le sumo 1900
// console.log(fecha.getYear()+1900)

//trabajar con el dia de hoy antes con fechas
//me dice la hora actual en horas minutos segundos
// console.log(fecha.getHours())
// console.log(fecha.getMinutes())
// console.log(fecha.getSeconds())


//para saber la fecha actual
const fecha = new Date(1598972784594);

Date.now()

console.log(fecha)
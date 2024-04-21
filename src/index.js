//import React from 'react';
//import ReactDOM from 'react-dom';

//const element = <h1>Hello World</h1>;
////console.log(element);
//ReactDOM.render(element, document.getElementById('root'));

//const person = {
//    name: 'Mila',
 //   walk(){
 //       console.log(this); // zbog bind ovom this dodajemo vrednost
//   }
//};

//person.walk();

//const walk = person.walk.bind(person); //this sada ukazuje na person zbog ovog bind i imamo ok izlaz u konzoli
//walk();


///ARRAY FUNCTIONS

//const jobs = [
 //   {id:1, isActive:true},
 //   {id:2, isActive:true},
 //   {id:3, isActive:false}
//];

//const activeJobs = jobs.filter(job => job.isActive);

//console.log(activeJobs);

import Teacher, { promote } from "./teacher";
import React, { Component } from 'react'; //nije deo naseg projekta pa ne ide ./

const teacher = new Teacher("Mila", "MSc");
teacher.teach();
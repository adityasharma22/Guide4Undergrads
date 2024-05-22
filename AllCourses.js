import { Button } from "reactstrap";
import React, { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";
import base_url from "./../api/bootapi";

import axios from "axios";

import { toast } from "react-toastify";

const Allcourse = () => {

useEffect(() => {

document.title = "All Blogs || Aditya Sharma";
 }, []);
 //function to call server:

const getAllCoursesFromServer = () => {

axios.get(`${base_url}/courses`).then(

(response) => {

//success

// console.log(response);

console.log(response.data);

toast.success("Blogs has been loaded", { 
    position: "bottom-center",
});
setCourses(response.data);

},

(error) => {

//for error

console.log(error);

toast.error("something went wrong", {

position: "bottom-center",

});

}

);

};
//calling loading course function 
useEffect(() => {
     getAllCoursesFromServer();
     }, []);

const [courses, setCourses] = useState([]);
const UpdateCourses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
};

return (

<div>

<h1>All Blogs</h1>

<p>List of Blogs are as follows</p>

{courses.length > 0

? courses.map((item) => <Course key={item.id} course={item} update={UpdateCourses} />)

: "No Blogs"}

</div>

);

};

export default Allcourse;
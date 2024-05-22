package com.springboot.springrest.controller;

import com.springboot.springrest.Services.CourseService;
import com.springboot.springrest.entities.courses;
// import com.springboot.springrest.entity.courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class MyController {
//     @GetMapping("/home")
//     public String  home(){
//         return "homepage aa gya";
@Autowired
private CourseService courseService; // obejct se bulaenge getservice

    @GetMapping("/courses")
    public List<courses> getcourses() {
         return this.courseService.getcourses();
  // list service se mangaenge
     }
 ////////////////////    //by coursid/////////////////////
     @GetMapping("/courses/{courseId}")
 public courses getCourse(@PathVariable String courseId){ //sindle course //entity datatype bann gyi
        return this.courseService.getCourse(Long.parseLong(courseId));
     }
//////////////////add///////////////
     @PostMapping("/courses")  //method different h toh chlega sam url
    public courses addCourse(@RequestBody courses course){

        return this.courseService.addCourse(course);
     }
////////     ///////////update//////////////////////
     @PutMapping("/courses")
    public courses updateCourse(@RequestBody courses course){

        return  this.courseService.updateCourse(course);
    }
    ////////////////////delete//////////////////
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
        try {
            this.courseService.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


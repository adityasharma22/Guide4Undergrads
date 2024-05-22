package com.springboot.springrest.Services;

import com.springboot.springrest.dao.CourseDao;
import com.springboot.springrest.entities.courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseDao courseDao; //2-----> ab list se nhi db se object se aega data
 // 1---> List<courses> list;
    public CourseServiceImpl(){
//        list = new ArrayList<>();
//        list.add(new courses(12,"aditya sharma","my failure experience")); // cpnst. called
//        list.add(new courses(124,"avinash dwivedi","learn basics and then dsa")); // cpnst. called
// upr vala sab toh ab db se aa jaega list vala sab  htao nhi bnani

    }

    public List<courses> getcourses(){
        return  courseDao.findAll();
//        return list;
    }
  ///////////////////////////////////////////by course id single course

    public courses getCourse(long courseId){
//        courses c = null;
//        for(courses course : list){
//            if(course.getId() == courseId){
//                c = course;
//                break;
//            }
//        }
//   return c;
        return courseDao.getOne(courseId);
    }
    ///add course///////////////
    public courses addCourse(courses course){
  //      list.add(course);
       // return course;
         courseDao.save(course);
         return course;
    }
    ///////////////////update///////////////////
    public courses updateCourse(courses course){
//        list.forEach(e->{
//            if(e.getId()==course.getId()){
//                e.setTitle(course.getTitle());
//                e.setDesc(course.getDesc());
//            }
//        });
   //     return course;
        courseDao.save(course);
        return course;  //same as add agr update nhi hoga toh add ho jaega
    }
    //////////////////////////////delete///////////////////
    public void deleteCourse(long parseLong){
 //   list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
        courses entity = courseDao.getOne(parseLong);
        courseDao.delete(entity);
    }



}

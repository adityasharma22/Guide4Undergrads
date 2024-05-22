package com.springboot.springrest.Services;

import com.springboot.springrest.entities.courses;

import java.util.List;

public interface CourseService {
    public List<courses> getcourses();

    public courses getCourse(long courseId);

    public courses addCourse(courses course);

    public courses updateCourse(courses course);

    public void deleteCourse(long parseLong);
}

package com.springboot.springrest.dao;


import com.springboot.springrest.entities.courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<courses, Long>{

}

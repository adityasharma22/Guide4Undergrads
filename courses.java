package com.springboot.springrest.entities;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
//@T
public class courses {
    @Id //PRIMARY KEY DECLARATION
    private long id;
    private String title;
    private String description;

    @Override
    public String toString() {
        return "courses{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;

    }

    public void setDescription(String description) {
        this.description = description;

    }

    public courses(long id, String title, String description) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
    }
    public courses(){

        super();
    }
}

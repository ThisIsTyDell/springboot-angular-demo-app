package com.tymiller.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Photo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long photoId;
	private String photoName;
	private String title;
	private String description;
	private String imageName;
	
	@CreationTimestamp
	private Date created;
}

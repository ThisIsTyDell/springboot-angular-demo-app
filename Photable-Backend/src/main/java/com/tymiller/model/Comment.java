package com.tymiller.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long commentId;
	private String content;

	@ManyToOne
	@JsonIgnore
	private Photo photo;
	private Long photoId;
	private String userName;
	
}

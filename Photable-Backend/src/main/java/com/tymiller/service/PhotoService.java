package com.tymiller.service;

import java.util.List;

import com.tymiller.model.Photo;
import com.tymiller.model.User;

public interface PhotoService {
	Photo save(Photo photo);
	
	List<Photo> findAll();
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
}

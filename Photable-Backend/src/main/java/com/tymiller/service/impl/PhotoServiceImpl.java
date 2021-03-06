package com.tymiller.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tymiller.dao.PhotoDao;
import com.tymiller.model.Photo;
import com.tymiller.model.User;
import com.tymiller.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService {

	@Autowired
	private PhotoDao photoDao;
	
	public Photo save(Photo photo) {
		return photoDao.save(photo);
	}

	public List<Photo> findAll() {
		return photoDao.findAll();
	}

	public List<Photo> findByUser(User user) {
		return photoDao.findByUser(user);
	}

	public Photo findByPhotoId(Long photoId) {
		return photoDao.findByPhotoId(photoId);
	}

}

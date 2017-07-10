package com.tymiller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tymiller.model.Photo;
import com.tymiller.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

	@Autowired
	private PhotoService photoService;
	
	@RequestMapping("/allPhotos")
	public List<Photo> getAllPhotos() {
		return photoService.findAll();
	}
}

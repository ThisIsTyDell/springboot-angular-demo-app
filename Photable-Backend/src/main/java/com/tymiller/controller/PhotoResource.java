package com.tymiller.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@RestController
@RequestMapping("/rest")
public class PhotoResource {

	private String imageName;
	
	@Autowired
	private PhotoService photoService;
	
	@RequestMapping(value="/photo/upload", method = RequestMethod.POST)
	public String upload(HttpServletResponse response, HttpServletRequest request) {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Iterator<String> it = multipartRequest.getFileNames();
		MultipartFile multipartFile = multipartRequest.getFile(it.next());
		String fileName = multipartFile.getOriginalFilename();
		imageName=fileName;
		
		String path = new File("target/classes/static/images").getAbsolutePath() + "\\" + fileName;
		try {
			multipartFile.transferTo(new File(path));
			System.out.println(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return "Upload Success!";
	}
}
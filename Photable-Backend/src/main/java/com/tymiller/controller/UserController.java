package com.tymiller.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tymiller.model.User;
import com.tymiller.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login() { return "test";}
	
	@RequestMapping(value="/register", method = RequestMethod.POST)	
	public User registerUser(@RequestBody User user) {
		return userService.save(user);
	}
}

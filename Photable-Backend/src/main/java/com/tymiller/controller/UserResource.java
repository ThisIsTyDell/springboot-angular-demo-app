package com.tymiller.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tymiller.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserResource {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/user/users")
	public List<User> findAllUsers() {
		return userService.findAllUsers();
	}
}

package com.tymiller.service;

import java.util.List;

import com.tymiller.model.User;

public interface UserService {
	List<User> findAllUsers();
	
	User findByUserName(String userName);
	
	User save(User user);
	
}

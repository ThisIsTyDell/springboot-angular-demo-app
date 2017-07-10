package com.tymiller.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tymiller.model.Comment;
import com.tymiller.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentDao commentDao;
	
	public Comment save(Comment comment) {
		return commentDao.save(comment);
	}

	public List<Comment> findByPhotoId(Long photoId) {
		return commentDao.findOne(commentId);
	}

	public Comment findOne(Long commentId) {
		return commentDao.findByPhotoId(photoId);
	}

}

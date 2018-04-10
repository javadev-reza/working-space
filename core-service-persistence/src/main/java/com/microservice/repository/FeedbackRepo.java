package com.microservice.repository;

import com.microservice.model.T_Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepo extends JpaRepository<T_Feedback, String> {

}

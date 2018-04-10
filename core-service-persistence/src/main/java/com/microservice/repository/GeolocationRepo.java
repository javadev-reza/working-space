package com.microservice.repository;

import com.microservice.model.T_Geolocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GeolocationRepo extends JpaRepository<T_Geolocation, String> {

}

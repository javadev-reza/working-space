package com.microservice.dto;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class CompanyRegistrationDto {

    private T_CompanyDto company;

    private T_CompanyProfileDto companyProfile;
}

package com.microservice.service;

import com.microservice.model.BaseTemp;
import com.microservice.repository.*;
import com.microservice.repository.custom.service.GenericRepo;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author reza
 */
public class BaseRepository extends BaseTemp {

    @Autowired
    public GenericRepo genericRepo;

    @Autowired
    public ApiRegisterRepo apiRegisterRepo;

    @Autowired
    public ApplicationRepo applicationRepo;

    @Autowired
    public BankRepo bankRepo;

    @Autowired
    public CountryRepo countryRepo;

    @Autowired
    public DistrictRepo districtRepo;

    @Autowired
    public GenderRepo genderRepo;

    @Autowired
    public ModulRepo modulRepo;

    @Autowired
    public OrderStatusRepo orderStatusRepo;

    @Autowired
    public ProvinceRepo provinceRepo;

    @Autowired
    public ReligionRepo religionRepo;

    @Autowired
    public CountyTownRepo countyTownRepo;

    @Autowired
    public VilageRepo vilageRepo;

    @Autowired
    public ActiveUserRepo activeUserRepo;

    @Autowired
    public BankAccountRepo bankAccountRepo;

    @Autowired
    public CompanyRepo companyRepo;

    @Autowired
    public FeedbackRepo feedbackRepo;

    @Autowired
    public GeolocationRepo geolocationRepo;

    @Autowired
    public ProductRepo productRepo;

    @Autowired
    public ProductDetailRepo productDetailRepo;

    @Autowired
    public RoleRepo roleRepo;

    @Autowired
    public RoleMenuRepo roleMenuRepo;

    @Autowired
    public ServicesRepo servicesRepo;

    @Autowired
    public EmployeeRepo employeeRepo;

    @Autowired
    public UserRepo userRepo;

    @Autowired
    public EmailService emailService;



}

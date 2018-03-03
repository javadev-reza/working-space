package com.microservice.model.dto;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotNull;

import static com.microservice.constanta.WebConstant.ValueMessageInfo.COLUMN_NOT_NULL;

/**
 *
 * @author reza
 */
@Getter
@Setter
public class M_ReferralDto extends BaseMasterDto {

    @NotNull(message = COLUMN_NOT_NULL)
    private String referral;
}

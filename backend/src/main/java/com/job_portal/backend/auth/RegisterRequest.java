package com.job_portal.backend.auth;

import com.job_portal.backend.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRequest {

    private String first_name;
    private String last_name;
    private String userType;
    private String email;
    private String password;
}

package com.job_portal.backend.auth;

import com.job_portal.backend.dto.UserInfoDto;
import lombok.AllArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AuthenticationResponse {
    private String token;
    private UserInfoDto user;

    public AuthenticationResponse(String s) {
    }
}

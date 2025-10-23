package com.job_portal.backend.auth;

import com.job_portal.backend.config.JwtService;
import com.job_portal.backend.entity.Role;
import com.job_portal.backend.entity.User;
import com.job_portal.backend.role.RoleRepository;
import com.job_portal.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse  login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        var token = jwtService.createToken(user);
        return AuthenticationResponse.builder().token(token).build();

    }


    public AuthenticationResponse register(RegisterRequest request) {


        String roleName;
        if ("RECRUITER".equalsIgnoreCase(request.getUserType())) {
            roleName = "ROLE_RECRUITER";
        } else if ("CANDIDATE".equalsIgnoreCase(request.getUserType())) {
            roleName = "ROLE_CANDIDATE";
        } else {
            throw new IllegalArgumentException("Invalid user type. Must be CANDIDATE or RECRUITER");
        }

        // Find the role from database
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new RuntimeException("Role not found: " + roleName));

        // Create user with both role and userType
        User user = User.builder()
                .first_name(request.getFirst_name())
                .last_name(request.getLast_name())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(role) // Set the role entity
                .build();

        userRepository.save(user);

        return new AuthenticationResponse("User registered successfully!");
    }
}

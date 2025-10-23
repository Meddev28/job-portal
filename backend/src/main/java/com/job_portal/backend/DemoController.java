package com.job_portal.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/demo-controller")
@RequiredArgsConstructor

public class DemoController {

    @PreAuthorize("hasRole('CANDIDATE')")
    @GetMapping("hello")
    public ResponseEntity<String> sayHello(){
        return  ResponseEntity.ok("Hello mohammed 3la slama");
    }


    @GetMapping("myName")
    public ResponseEntity<String> sayMyName(){
        return  ResponseEntity.ok("Hello MyNamy 3la slama");
    }
}

package com.emusic;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
public class MainController {
	
	  @RequestMapping("/user")
	  public Principal user(Principal principal) {
	    return principal;
	  }
}

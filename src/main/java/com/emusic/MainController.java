package com.emusic;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {
	
	@RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
	
	@RequestMapping("/hello")
    public String landing() {
        return "index";
    }
	
	//@RequestMapping("/app/**")
    public String app() {
        return "index";
    }


}

package com.emusic;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Controller
public class MainController {
	
	//@RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
	
	//@RequestMapping("/hello")
    public String landing() {
        return "index";
    }
	
	//@RequestMapping("/product/productList/all")
    public String app() {
        return "views/productList";
    }
    
    
  // @RequestMapping("/product/productList/all")
    public String productList() {
        return "productList";
    }
    
}

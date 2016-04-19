package com.emusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
/**
 * 
 * @author francisphiri
 *
 */
@SpringBootApplication
public class EmusicstoreApplication{

	
	public static void main(String[] args) {
		SpringApplication.run(EmusicstoreApplication.class, args);
	}
	
	
}

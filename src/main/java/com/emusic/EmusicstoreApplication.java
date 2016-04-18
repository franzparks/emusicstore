package com.emusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
/**
 * 
 * @author francisphiri
 *
 */
@SpringBootApplication
@EnableOAuth2Sso
public class EmusicstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmusicstoreApplication.class, args);
	}
	
}

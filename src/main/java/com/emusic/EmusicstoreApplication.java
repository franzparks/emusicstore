package com.emusic;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
/**
 * 
 * @author francisphiri
 *
 */
@SpringBootApplication
public class EmusicstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmusicstoreApplication.class, args);
	}
	
	// add some sample data
	@Bean
	public CommandLineRunner demo(ProductRepository repository) {
			// save a couple of customers
			repository.save(new Product());
		}
}

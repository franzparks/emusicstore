/**
 * 
 */
package com.emusic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author francis
 *
 */
@Component
public class ApplicationLoader implements CommandLineRunner {
	 @Autowired
	 ProductRepository repository;
	 
	@Override
	public void run(String... args) throws Exception {
		repository.save(new Product("Stage Speakers","Instruments","Used",470.00));
	}

}

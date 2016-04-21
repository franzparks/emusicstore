/**
 * 
 */
package com.emusic;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author francis
 *
 */
@Component
public class ApplicationLoader implements CommandLineRunner {
	private static final org.slf4j.Logger logger = LoggerFactory.getLogger(ApplicationLoader.class);
	
	 @Autowired
	 private ProductRepository repository;
	 
	@Override
	public void run(String... args) throws Exception {
		repository.save(new Product("Stage Speakers","Instruments","Used",470.00,"The best acoustics you can find anywhere!","Sony"));
		repository.save(new Product("Stage Mic","Instruments","New",120.00,"The best Mic","Sony"));
		repository.save(new Product("Stage Prop","Props","Used",65.00,"The best prop used at most concerts!","AMC"));
		repository.save(new Product("Stage Lights","Infrastructure","Used",900.00,"The best lights for any show!","General Electric"));
		repository.save(new Product("Dj Machine","Instruments","Used",870.00,"The best dj machine in the world!","Sony"));
		repository.save(new Product("Discs","Instruments","Used",30.00,"The best records of all time!","Capitol Records"));
		logger.info(String.format("App launched with following sample data: %s",repository.findAll()));
	}

}

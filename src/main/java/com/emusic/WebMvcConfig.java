package com.emusic;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.velocity.VelocityConfigurer;
import org.springframework.web.servlet.view.velocity.VelocityView;
import org.springframework.web.servlet.view.velocity.VelocityViewResolver;

//Running with Spring Boot v1.3.0.RELEASE, Spring v4.2.3.RELEASE
//@Configuration
///@EnableConfigurationProperties({ ResourceProperties.class })
//@EnableWebMvc
//@ComponentScan(basePackages = "com.emusic.springmvc")
public class WebMvcConfig extends WebMvcConfigurerAdapter {

//@Autowired
//private ResourceProperties resourceProperties = new ResourceProperties();



//@Override
public void addResourceHandlers1(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/resources/*")
    .addResourceLocations("/resources/");
}


}

package com.emusic;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.security.web.context.SecurityContextPersistenceFilter;

@Configuration
@EnableOAuth2Sso
public class StandardConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private OAuth2ClientContextFilter oauth2ClientContextFilter;

    @Autowired
    private OAuth2ClientContext oauth2ClientContext;


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
        .authorizeRequests().antMatchers("/login").anonymous().and()
        .authorizeRequests().anyRequest().authenticated().and()
        .httpBasic().and()
        .addFilterAfter(oauth2ClientContextFilter, SecurityContextPersistenceFilter.class);
        // @formatter:on
    }

//  org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type [org.springframework.security.oauth2.client.OAuth2RestOperations] is defined: expected single matching bean but found 2: restTemplate,userInfoRestTemplate
  //@Bean
  //public OAuth2RestOperations restTemplate() {
  //    return new OAuth2RestTemplate(facebook(), oauth2ClientContext);
  //}
    
    @Bean
	public OAuth2RestTemplate facebookRestTemplate(OAuth2ClientContext clientContext) {
		OAuth2RestTemplate template = new OAuth2RestTemplate(facebook(), clientContext);
		MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
		converter.setSupportedMediaTypes(Arrays.asList(MediaType.APPLICATION_JSON,
				MediaType.valueOf("text/javascript")));
		template.setMessageConverters(Arrays.<HttpMessageConverter<?>> asList(converter));
		return template;
	}

    @Bean
    public OAuth2ProtectedResourceDetails facebook() {
        AuthorizationCodeResourceDetails details = new AuthorizationCodeResourceDetails();
        details.setId("facebook");
        details.setClientId("202567820135149");
        details.setClientSecret("a9ff3962dc13da13a1ca51c06ec28087");
        details.setAccessTokenUri("https://graph.facebook.com/oauth/access_token");
        details.setUserAuthorizationUri("https://www.facebook.com/dialog/oauth");
        details.setTokenName("oauth_token");
        details.setAuthenticationScheme(AuthenticationScheme.query);
        details.setClientAuthenticationScheme(AuthenticationScheme.form);
        
        return details;
    }
}


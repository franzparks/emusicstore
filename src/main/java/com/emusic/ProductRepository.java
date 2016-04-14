package com.emusic;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepository extends PagingAndSortingRepository<Product, Long>{
	
	List<Product> findByProductName(@Param("name") String name);
	
	List<Product> findByProductCategory(@Param("category") String category);

}

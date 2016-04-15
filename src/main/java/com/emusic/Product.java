/**
 * 
 */
package com.emusic;

/**
 * @author francis
 *
 */

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long productId;

	private String productName;
	private String productCategory;
	private String productCondition;
	private Double productPrice;
	
	public Product(){
		
	}
	
	public Product(String productName, String productCategory,
			String productCondition, Double productPrice) {
		super();
		this.productName = productName;
		this.productCategory = productCategory;
		this.productCondition = productCondition;
		this.productPrice = productPrice;
	}
	
	/**
	 * @return the productId
	 */
	public long getProductId() {
		return productId;
	}
	/**
	 * @return the productName
	 */
	public String getProductName() {
		return productName;
	}
	/**
	 * @return the productCategory
	 */
	public String getProductCategory() {
		return productCategory;
	}
	/**
	 * @return the productCondition
	 */
	public String getProductCondition() {
		return productCondition;
	}
	/**
	 * @return the productPrice
	 */
	public Double getProductPrice() {
		return productPrice;
	}
	/**
	 * @param productId the productId to set
	 */
	public void setProductId(long productId) {
		this.productId = productId;
	}
	/**
	 * @param productName the productName to set
	 */
	public void setProductName(String productName) {
		this.productName = productName;
	}
	/**
	 * @param productCategory the productCategory to set
	 */
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	/**
	 * @param productCondition the productCondition to set
	 */
	public void setProductCondition(String productCondition) {
		this.productCondition = productCondition;
	}
	/**
	 * @param productPrice the productPrice to set
	 */
	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName="
				+ productName + ", productCategory=" + productCategory
				+ ", productCondition=" + productCondition + ", productPrice="
				+ productPrice + "]";
	}
	
	

}

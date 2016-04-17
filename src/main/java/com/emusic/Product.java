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
	private String productDescription;
	private String productManufacturer;
	
	public Product(){
		
	}
	
	public Product(String productName, String productCategory,
			String productCondition, Double productPrice,
			String productDescription, String productManufacturer) {
		super();
		this.productName = productName;
		this.productCategory = productCategory;
		this.productCondition = productCondition;
		this.productPrice = productPrice;
		this.productDescription = productDescription;
		this.productManufacturer = productManufacturer;
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

	/**
	 * @return the productDescription
	 */
	public String getProductDescription() {
		return productDescription;
	}

	/**
	 * @return the productManufacturer
	 */
	public String getProductManufacturer() {
		return productManufacturer;
	}

	/**
	 * @param productDescription the productDescription to set
	 */
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	/**
	 * @param productManufacturer the productManufacturer to set
	 */
	public void setProductManufacturer(String productManufacturer) {
		this.productManufacturer = productManufacturer;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName="
				+ productName + ", productCategory=" + productCategory
				+ ", productCondition=" + productCondition + ", productPrice="
				+ productPrice + ", productDescription=" + productDescription
				+ ", productManufacturer=" + productManufacturer + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((productCategory == null) ? 0 : productCategory.hashCode());
		result = prime
				* result
				+ ((productCondition == null) ? 0 : productCondition.hashCode());
		result = prime
				* result
				+ ((productDescription == null) ? 0 : productDescription
						.hashCode());
		result = prime * result + (int) (productId ^ (productId >>> 32));
		result = prime
				* result
				+ ((productManufacturer == null) ? 0 : productManufacturer
						.hashCode());
		result = prime * result
				+ ((productName == null) ? 0 : productName.hashCode());
		result = prime * result
				+ ((productPrice == null) ? 0 : productPrice.hashCode());
		return result;
	}

	
}

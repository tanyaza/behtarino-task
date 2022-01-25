import React from "react";
import styles from "../../styles/Product.module.css";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<ProductItem product={product} />
			))}
		</div>
	);
};

export default ProductList;

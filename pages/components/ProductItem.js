import React from "react";
import Link from "next/link";
import styles from "../../styles/Product.module.css";
import ReactStars from "react-stars";

const ProductItem = ({ product }) => {
	return (
		<Link href="/products/[id]" as={`/products/${product.id}`}>
			<div className={styles.productBox}>
				<div className={styles.productImage}>
					<img src={product.image} />
				</div>

				<div className={styles.productInfo}>
					<div className={styles.productTitle}>
						<h1>{product.title}</h1>

						<ReactStars
							style={{ display: "flex" }}
							count={5}
							size={18}
							value={product.rating.rate}
							color2={"rgb(247, 132, 151)"}
							color1="#ede8e8"
							edit={false}
						/>
					</div>

					<span>${product.price}</span>
					<div className={styles.productDesc}>
						<h3>description</h3>
						<p>{product.description}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;

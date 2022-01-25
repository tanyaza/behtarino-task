import React from "react";
import Meta from "../../components/Meta";
import ProductItem from "../../components/ProductItem";

const product = ({ product }) => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<>
			<Meta description={product.description} title={product.title} />
			<ProductItem product={product} />
		</>
	);
};
export const getServerSideProps = async (context) => {
	const res = await fetch(
		`https://fakestoreapi.com/products/${context.params.id}`
	);

	const product = await res.json();
	return {
		props: {
			product,
		},
	};
};
export default product;

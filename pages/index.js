import Head from "next/head";
import ProductList from "./components/ProductList";
import Meta from "./components/Meta";
export default function Home({ products }) {
	return (
		<>
			<Meta />
			<ProductList products={products} />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`https://fakestoreapi.com/products/`);
	const products = await res.json();

	return {
		props: { products },
	};
};

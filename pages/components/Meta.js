import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
		</Head>
	);
};
Meta.defaultProps = {
	title: "Behtarino task",
	keywords: "product",
	description: "get products info",
};

export default Meta;

import Breadcrumb from "./Breadcrumb";

function Layout({ title, children }) {
	return (
		<main>
			<h2>{title}</h2>
			<Breadcrumb />
			<section id={title.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;
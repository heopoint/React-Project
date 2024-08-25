import { Link, useLocation } from "react-router-dom";

function Gnb() {
	const { pathname } = useLocation();
	console.log(pathname);
	// /members => members.split('/') = ['', 'members']
	//메뉴 데이터 배열
	const menuData = [
		{ name: "MEMBERS" },
		{ name: "POSTS" },
		{ name: "GALLERY" },
		{ name: "YOUTUBE" },
		{ name: "CONTACT" },
		{ name: "JOIN" }
	];
	return (
		<ul>
			{menuData.map((data, idx) => {
				return (
					<li
						key={idx}
						className={
						 
							data.name.toLowerCase() === pathname.split("/")[1] ? "on" : ""
						}>
						{/* <Link to={`/${data.name.toLowerCase()}`}> */}
						<Link  to={"/" + data.name.toLowerCase()}>
							{data.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Gnb;
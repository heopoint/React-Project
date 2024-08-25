import Home from "../pages/Home";
import Members from "../pages/Members";
import Posts from "../pages/Posts";
import Gallery from "../pages/Gallery";
import Youtube from "../pages/Youtube";
import Contact from "../pages/Contact";
import Join from "../pages/Join";
import YoutubeDetail from "../pages/YoutubeDetail";

export default [
	{ path: "/", comp: Home, name: "Home" },
	{ path: "/members", comp: Members, name: "Members" },
	{ path: "/posts", comp: Posts, name: "Posts" },
	{ path: "/gallery", comp: Gallery, name: "Gallery" },
	{ path: "/youtube", comp: Youtube, name: "Youtube" },
	{ path: "/youtube/:id", comp: YoutubeDetail, name: "Youtube  Detail" },
	{ path: "/contact", comp: Contact, name: "Contact" },
	{ path: "/join", comp: Join, name: "Join" }
];
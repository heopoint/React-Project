import { useLocation, Link } from "react-router-dom";
import React from "react";

function Breadcrumb() {
	const { pathname } = useLocation();
	 const pathArr = pathname.split("/").filter(path => path !== "");
 

	return (
		<nav>
		    
        <span>
          <Link to="/">HOME</Link>
        </span>
        {pathArr.map((path, idx) => {
          const fullPath = "/" + pathArr.slice(0, idx + 1).join("/").toLowerCase();
          return (
            <React.Fragment key={idx}>
              <span>&gt;</span>
              {idx !== pathArr.length - 1 ? (
                <span>
                  <Link to={fullPath}>{path.toUpperCase()}</Link>
                </span>
              ) : (
                <strong>{path.toUpperCase()}</strong>
              )}
            </React.Fragment>
          );
        })}
 
		</nav>
	);
}

export default Breadcrumb;
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";



const SideNav = props => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/">
			Message in a Bottle
    </Link>
		<div>
			<ul className="navbar-nav">
				<li
					className={
						window.location.pathname === "/" ||
							window.location.pathname === "/about"
							? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="/" className="nav-link">
						About
          </Link>
				</li>
				<li
					className={
						window.location.pathname === "/discover"
							? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="/discover" className="nav-link">
						Discover
          </Link>
				</li>
				<li
					className={
						window.location.pathname === "/sendbottle"
							? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="/sendbottle" className="nav-link">
						Send Message
          </Link>
				</li>
				<li
					className={
						window.location.pathname === "/saved"
							? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="/saved" className="nav-link">
						View Saved
          </Link>
				</li>
			</ul>
		</div>
	</nav>

);

export default SideNav;

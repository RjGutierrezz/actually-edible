"use client"

import StaggeredMenu from "./react-bits/StaggeredMenu";

const menuItems = [
	{ label: "Home", ariaLabel: "Go to home page", link: "/" },
	{ label: "About", ariaLabel: "Learn about us", link: "/about" },
	{ label: "Services", ariaLabel: "View our services", link: "/services" },
	{ label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
	{ label: "Twitter", link: "https://twitter.com" },
	{ label: "GitHub", link: "https://github.com" },
	{ label: "LinkedIn", link: "https://linkedin.com" },
];

const Navigator = () => {
	return (
		<div style={{ height: "100vh", background: "#FEFAE0" }}>
			<StaggeredMenu
				position="right"
				items={menuItems}
				socialItems={socialItems}
				displaySocials
				displayItemNumbering={true}
				menuButtonColor="#1a1a1a"
				openMenuButtonColor="#1a1a1a"
				changeMenuColorOnOpen={true}
				colors={["#B19EEF", "#5227FF"]}
				logoUrl="/path-to-your-logo.svg"
				accentColor="#5227FF"
				onMenuOpen={() => console.log("Menu opened")}
				onMenuClose={() => console.log("Menu closed")}
			/>
		</div>
	);
};

export default Navigator;

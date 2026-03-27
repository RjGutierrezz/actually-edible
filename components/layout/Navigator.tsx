"use client"

import { ReactNode } from "react"
import StaggeredMenu from "../react-bits/StaggeredMenu";

const menuItems = [
	{ label: "Home", ariaLabel: "Go to home page", link: "/" },
	{ label: "Recipes", ariaLabel: "View my recipes", link: "/recipes" },
	{ label: "Notes", ariaLabel: "My notes", link: "/notes" },
	{ label: "About", ariaLabel: "Learn more about me", link: "/about" },
];

const socialItems = [
	{ label: "Instagram", link: "https://www.instagram.com/hotmorovs/" },
	{ label: "GitHub", link: "https://github.com/RjGutierrezz" },
	{ label: "LinkedIn", link: "https://www.linkedin.com/in/rover-gutierrez-536669249/" },
];

type NavigatorProps = {
  children: ReactNode;
}

const Navigator = ({children}: NavigatorProps) => {
	return (
		<div style={{ height: "100vh", background: "#FEFAE0" }}>
			<StaggeredMenu
				position="right"
				items={menuItems}
				socialItems={socialItems}
				displaySocials
				displayItemNumbering={true}
				menuButtonColor="#2E3221"
				openMenuButtonColor="#2E3221"
				changeMenuColorOnOpen={true}
				colors={["#79300E", "#2F4D34"]}
				// logoUrl="/path-to-your-logo.svg"
				accentColor="#2F4D34"
				onMenuOpen={() => console.log("Menu opened")}
				onMenuClose={() => console.log("Menu closed")}

        isFixed={true}
			/>
      <main className="px-6 pt-24">{children}</main>
		</div>
	);
};

export default Navigator;

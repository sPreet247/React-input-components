import { NavLink, Title, SideNavWrapper } from './SideNavbarElements';
function SideNavBar() {
	return (
		<>
			<Title>
				Dev<span style={{ color: '#000000' }}>challenges.io</span>
			</Title>

			<nav>
				<NavLink colors>Colors</NavLink>
				<NavLink typography>Typography</NavLink>
				<NavLink spaces>Spaces</NavLink>
				<NavLink buttons>Buttons</NavLink>
				<NavLink inputs>Inputs</NavLink>
				<NavLink grid>Grid</NavLink>
			</nav>
		</>
	);
}

export default SideNavBar;

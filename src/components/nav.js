import * as React from 'react';
import { Link } from 'gatsby'

const navItems = [
    { id: 'home', name: 'Home', to: '/' },
    // { id: 'articles', name: 'Articles', }
]
const NavItem = ({ navItem }) => {
    return (
        <Link to={navItem.to}>
            {navItem.name}
        </Link>
    )
}

const Nav = () => (
    <div style={{
        height: '50px',
        background: 'pink',
    }}>
        {navItems.map(x => (
            <NavItem navItem={x} id={x.id} />
        ))
        }
    </div>
)


export default Nav
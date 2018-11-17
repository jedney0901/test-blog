import * as React from 'react';

const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'articles', name: 'Articles' }
]
const NavItem = ({ navItem }) => {
    return (
        <div>
            {navItem.name}
        </div>
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
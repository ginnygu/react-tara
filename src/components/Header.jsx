import React from 'react';


function Header(props) {
    const { links } = props;
    return (
        <div className="header">
            <nav className="nav">
                <img className="tiny-logo" src="images/daruma.svg" alt="" />
                <ul className="nav-bar">
                    {links.map(link => {
                        return <p key={link} onClick={() => props.ToPages(link)}>{link}</p>
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Header;

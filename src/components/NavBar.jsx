import React from 'react';


function NavBar(props){
    const { links } = props;  
    return (
        <nav className='nav'>
          {links.map(link => {
              return <p key={link} onClick ={() => props.ToPages(link)}>{link}</p>
          })}
        </nav>
    )
}
export default NavBar;
 
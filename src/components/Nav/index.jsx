import React, {Fragment, FC} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useEffect } from 'react';

const Nav = ({}) => {

  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');

  var currentPageName = '/';

  useEffect(() => {
    currentPageName = window.location.pathname;
  })

  return (
      <Menu as="div" className="relative flex text-left p-2 justify-between align-middle shadow-md z-100">
          <Menu.Button as='img' alt='Leesey Logo' src={require('../../assets/leesey_logo_rabbit.PNG')}
            className="inline-flex text-warm-white justify-center max-h-36 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-accent"
              onClick={handleHomeClick}
            >
          </Menu.Button>
        <ul className='p-2 pb-4 align-middle justify-center self-end flex h-fit'>
          <Link className='nav-link' to={"/"}>Paintings</Link>
          <Link className='nav-link' to={"/drawings"}>Drawings</Link>
          <Link className='nav-link' to={"/lowdown"}>Lowdown</Link>
          <Link className='nav-link' to={"/CV"}>CV</Link>
        </ul>
      </Menu>
    )
};

export default Nav;
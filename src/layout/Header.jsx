import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconLineRightSource from '../images/line-right.svg';
import IconMenuSource from '../images/icon-menu.svg';

const Header = () => {
  return (
    <>
      <header className="py-7">
        <div className="container-lg">
          <div className="row justify-between items-center">
            <div className="col flex">
              <img src={IconLogoSource} className="" alt="logo icon" />
              <a href="#" className="hidden md:flex typo-intro ml-12">Home</a>
              <a href="#" className="hidden md:flex typo-intro ml-10">Menu</a>
              <a href="#" className="hidden md:flex typo-intro ml-10">About us</a>
              <a href="#" className="hidden md:flex typo-intro ml-10">Our Story</a>
              <a href="#" className="hidden md:flex typo-intro ml-10">Blog</a>
              <a href="#" className="hidden md:flex typo-intro ml-10">Contact</a>
            </div>
            <div className="hidden lg:flex col">
              <a href="#" className="typo-intro flex items-center text-orange-200">
                Clone Project
                <img src={IconLineRightSource} className="ml-3" alt="line-right icon" />
              </a>
            </div>
            <img src={IconMenuSource} className="inline-block md:hidden w-7 mr-4" alt="menu icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

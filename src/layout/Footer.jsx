import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconLineRightSource from '../images/line-right.svg';
import IconFacebookSource from '../images/facebook.svg';
import IconTwitterSource from '../images/twitter.svg';
import IconInstagramSource from '../images/instagram.svg';
import IconLinkedinSource from '../images/linkedin.svg';

const Footer = () => {
  return (
    <>
      <footer className="mt-20 lg:mt-40">
        <div className="text-center">
          <img src={IconLogoSource} className="mx-auto" alt="logo icon" />
          <div className="flex flex-wrap justify-center mt-5">
            <a href="#" className="typo-intro mx-5 mt-5">Home</a>
            <a href="#" className="typo-intro mx-5 mt-5">Menu</a>
            <a href="#" className="typo-intro mx-5 mt-5">About us</a>
            <a href="#" className="typo-intro mx-5 mt-5">Our Story</a>
            <a href="#" className="typo-intro mx-5 mt-5">Blog</a>
            <a href="#" className="typo-intro mx-5 mt-5">Contact</a>
          </div>
        </div>
        <div className="py-6 mt-8 border-t-2 border-gray-800">
          <div className="container-lg">
            <div className="row justify-center lg:justify-between items-center text-center">
              <div className="col-full lg:col-4">
                <p className="typo-body">
                  © 2021 Finsweet | All rights reserved.
                </p>
              </div>
              <div className="col mt-4 lg:mt-0">
                <div className="flex">
                  <a href="#" className="">
                    <img src={IconFacebookSource} className="" alt="facebook icon" />
                  </a>
                  <a href="#" className="ml-6">
                    <img src={IconTwitterSource} className="" alt="twitter icon" />
                  </a>
                  <a href="#" className="ml-6">
                    <img src={IconInstagramSource} className="" alt="instagram icon" />
                  </a>
                  <a href="#" className="ml-6">
                    <img src={IconLinkedinSource} className="" alt="linkedin icon" />
                  </a>
                </div>
              </div>
              <div className="col-full lg:col-4 lg:text-right mt-4 lg:mt-0">
                <a href="#" className="typo-intro">
                  Contact Us
                  {' '}
                  <img src={IconLineRightSource} className="ml-3 inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

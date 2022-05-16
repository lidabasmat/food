import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import IconLineBlackSource from '../images/line-black.svg';
import IconLogo2Source from '../images/logo2.svg';
import IconLogo22Source from '../images/logo22.svg';
import IconLogo3Source from '../images/logo3.svg';
import IconLogo4Source from '../images/logo4.svg';
import IconLogo5Source from '../images/logo5.svg';
import IconLogo6Source from '../images/logo6.svg';
import IconLogo7Source from '../images/logo7.svg';
import IconPlaySource from '../images/play.svg';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 683
          )
        }
      }
      cafe1Image: file(relativePath: {eq: "cafe1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 500
          )
        }
      }
      cafe2Image: file(relativePath: {eq: "cafe2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 500
          )
        }
      }
      pic1Image: file(relativePath: {eq: "pic1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic2Image: file(relativePath: {eq: "pic2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic3Image: file(relativePath: {eq: "pic3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic4Image: file(relativePath: {eq: "pic4.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic5Image: file(relativePath: {eq: "pic5.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      pic6Image: file(relativePath: {eq: "pic6.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      coffeeImage: file(relativePath: {eq: "coffee.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      sendwichImage: file(relativePath: {eq: "sendwich.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      burgerImage: file(relativePath: {eq: "burger.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      mapImage: file(relativePath: {eq: "map.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 532
          )
        }
      }
      javaImage: file(relativePath: {eq: "java.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 668
          )
        }
      }
      manImage: file(relativePath: {eq: "man.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 48
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="pt-24">
        <div className="container-lg">
          <div className="row">
            <div className="col-full md:col-6">
              <h1 className="typo-h1 opacity-90">
                We serve high quality foods of all kinds.
              </h1>
              <p className="typo-body mt-4 text-gray-200">
                Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.
              </p>
              <button className="mt-8 flex items-center bg-orange-200 px-6 py-3 font-medium text-base text-gray-800 flex">
                View Menu
                <img src={IconLineBlackSource} className="ml-2" alt="logo icon" />
              </button>
              <p className="typo-blockquote mt-10">
                Opening Times
              </p>
              <p className="typo-body opacity-60">
                Sunday to Saturday  l  09:00 AM to 11:00 PM
              </p>
              <p className="typo-blockquote mt-4">
                Location
              </p>
              <p className="typo-body opacity-60">
                Master canteen, BBSR , Odisha 752054
              </p>
              <p className="typo-blockquote mt-4">
                Call us
              </p>
              <p className="typo-body opacity-60">
                +9776462441
              </p>
            </div>
            <div className="col-full md:col-6 mt-10 md:mt-0">
              <Image
                image={getImage(data.heroImage)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg mt-20 lg:mt-40">
        <div className="row">
          <div className="col-full md:col-6">
            <div className="flex items-center">
              <h6 className="typo-h6 text-orange-500 uppercase">
                Know more about us
              </h6>
              <div className="w-12 h-px bg-white ml-4"></div>
            </div>
            <h2 className="typo-h2 mt-6">
              We source sustainable & line caught Foods
            </h2>
            <p className="typo-body mt-8 text-gray-200">
              Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words.
              You can move the text by dragging and dropping the text anywhere on the page.
            </p>
            <div className="row">
              <div className="col-full md:col-4 mt-10">
                <div className="flex items-center">
                  <img src={IconLogo2Source} className="ml-2" alt="logo2 icon" />
                  <p className="typo-h4 text-blue-100 ml-2">10+ People</p>
                </div>
                <p className="typo-body text-gray-200 mt-1">
                  We are Small Team
                </p>
                <p className="typo-body text-gray-200 mt-4">
                  Through True Rich Attended does no end it his mother since favourable.
                </p>
              </div>
              <div className="col-full md:col-4 mt-10">
                <div className="flex items-center">
                  <img src={IconLogo2Source} className="ml-2" alt="logo2 icon" />
                  <p className="typo-h4 text-blue-100 ml-2">2014</p>
                </div>
                <p className="typo-body text-gray-200 mt-1">
                  We are From
                </p>
                <p className="typo-body text-gray-200 mt-4">
                  Through True Rich Attended does no end it his mother since favourable.
                </p>
              </div>
              <div className="col-full md:col-4 mt-10">
                <div className="flex items-center">
                  <img src={IconLogo2Source} className="ml-2" alt="logo2 icon" />
                  <p className="typo-h4 text-blue-100 ml-2">200k</p>
                </div>
                <p className="typo-body text-gray-200 mt-1">
                  We Served
                </p>
                <p className="typo-body text-gray-200 mt-4">
                  Through True Rich Attended does no end it his mother since favourable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6">
            <div className="row">
              <div className="col-6 mt-24">
                <Image
                  image={getImage(data.cafe1Image)}
                />
              </div>
              <div className="col-6 mt-14 md:mt-0">
                <Image
                  image={getImage(data.cafe2Image)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg mt-20 lg:mt-40">
        <div className="row">
          <div className="col-full flex items-center">
            <h6 className="typo-h6 text-orange-500">
              What me are serving
            </h6>
            <div className="w-12 h-px bg-white ml-4"></div>
          </div>
        </div>
        <div className="row justify-between mt-6">
          <div className="col-full md:col-6">
            <h2 className="typo-h2">
              We all have to eat, so why not do it beautifully?
            </h2>
          </div>
          <div className="col-full md:col-6">
            <p className="typo-body mt-10 md:mt-0">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic..
              Through True Rich Attended does no end it his mother
            </p>
          </div>
        </div>
        <div className="bg-black mt-16">
          <div className="row">
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo22Source} className="" alt="logo22 icon" />
                <h3 className="typo-h3 mt-6">
                  Quafe Cake
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo3Source} className="" alt="logo3 icon" />
                <h3 className="typo-h3 mt-6">
                  Cofee
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo4Source} className="" alt="logo4 icon" />
                <h3 className="typo-h3 mt-6">
                  Fast Food
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo5Source} className="" alt="logo5 icon" />
                <h3 className="typo-h3 mt-6">
                  Cocktails
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo6Source} className="" alt="logo6 icon" />
                <h3 className="typo-h3 mt-6">
                  Grill
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
            <div className="col-full md:col-4">
              <div className="p-8 lg:p-16">
                <img src={IconLogo7Source} className="" alt="logo7 icon" />
                <h3 className="typo-h3 mt-6">
                  Snacks
                </h3>
                <p className="typo-body mt-3 text-gray-200">
                  Through True Rich Attended no end it his mother since favourable real had half every him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg mt-20 lg:mt-40">
        <div className="row">
          <div className="col-full flex items-center">
            <h6 className="typo-h6 text-orange-500">
              Our menu
            </h6>
            <div className="w-12 h-px bg-white ml-4"></div>
          </div>
        </div>
        <div className="row justify-between mt-6">
          <div className="col-full md:col-6">
            <h2 className="typo-h2">
              Discover our menu chart
            </h2>
            <p className="typo-small text-blue-100 mt-8">
              Most Popular Picks
            </p>
          </div>
          <div className="col-full md:col-6">
            <p className="typo-body mt-10 md:mt-0">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in
              packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-full md:col-6 lg:col-4 mt-20">
            <div className="bg-black">
              <Image
                image={getImage(data.pic1Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  Drp Cofee
                </p>
                <p className="typo-blockquote">
                  $08.85
                </p>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-20">
            <div className="bg-black">
              <Image
                image={getImage(data.pic2Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  Choco Cup Cake
                </p>
                <span className="typo-blockquote">
                  $4.85
                </span>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-8 lg:mt-20">
            <div className="bg-black">
              <Image
                image={getImage(data.pic3Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  Chicken Burger
                </p>
                <p className="typo-blockquote">
                  $8.85
                </p>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-8">
            <div className="bg-black">
              <Image
                image={getImage(data.pic4Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  French Fries
                </p>
                <p className="typo-blockquote">
                  $7.85
                </p>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-8">
            <div className="bg-black">
              <Image
                image={getImage(data.pic5Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  Sandwitch
                </p>
                <p className="typo-blockquote">
                  $3.97
                </p>
              </div>
            </div>
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-8">
            <div className="bg-black">
              <Image
                image={getImage(data.pic6Image)}
              />
              <div className="flex justify-between items-center px-8 py-6">
                <p className="typo-blockquote">
                  Chinese Soup
                </p>
                <p className="typo-blockquote">
                  $8.85
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-10 flex mx-auto items-center bg-orange-200 px-6 py-3 font-medium text-base text-gray-800 flex">
          View All Menu
          <img src={IconLineBlackSource} className="ml-2" alt="logo icon" />
        </button>
      </div>
      <div className="container-xl lg:px-0 mt-20 lg:mt-40">
        <div className="flex">
          <div className="bg-black px-5 lg:px-20 py-20">
            <h1 className="typo-h1">“</h1>
            <h3 className="typo-h4 max-w-lg">
              Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words.
              You can move the text by dragging and dropping the text
            </h3>
            <div className="flex justify-between items-center mt-16 pb-5 border-b-2">
              <div className="flex flex-col">
                <p className="typo-body">
                  Joheny Andro
                </p>
                <p className="typo-small">
                  Bhubaneswar, Odisha
                </p>
              </div>
              <Image
                image={getImage(data.manImage)}
                className=""
              />
            </div>
          </div>
          <div className="relative">
            <Image
              image={getImage(data.javaImage)}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <img src={IconPlaySource} className="" alt="logo icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg mt-20 lg:mt-40">
        <h2 className="typo-h2">
          Read Our Lastest Blog
        </h2>
        <div className="row">
          <div className="col-full md:col-6 lg:col-4 mt-16">
            <div className="bg-black p-8">
              <p className="typo-small">
                21 Jun 2021
              </p>
              <h3 className="typo-h3 mt-2">
                Extra Thick Homemad Pizza
              </h3>
              <p className="typo-body mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
            <Image
              image={getImage(data.coffeeImage)}
              className=""
            />
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-16">
            <div className="bg-black p-8">
              <p className="typo-small">
                21 Jun 2021
              </p>
              <h3 className="typo-h3 mt-2">
                The Best Way to Store Fresh Herbs
              </h3>
              <p className="typo-body mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
            <Image
              image={getImage(data.burgerImage)}
              className=""
            />
          </div>
          <div className="col-full md:col-6 lg:col-4 mt-16">
            <div className="bg-black p-8">
              <p className="typo-small">
                21 Jun 2021
              </p>
              <h3 className="typo-h3 mt-2">
                5 ways to prepare porridge
              </h3>
              <p className="typo-body mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
            <Image
              image={getImage(data.sendwichImage)}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="container-lg mt-20 lg:mt-40">
        <div className="flex flex-wrap">
          <div className="bg-black px-8 lg:px-16 py-16 w-full md:w-1/3">
            <p className="typo-blockquote">
              Working Hour
            </p>
            <p className="typo-body mt-1.5">
              Sunday to Saturday  09:00 AM to 11:00 PM
            </p>
            <p className="typo-blockquote mt-8">
              Location
            </p>
            <p className="typo-body mt-1.5">
              Street - 127, New York, United States 546544
            </p>
            <p className="typo-blockquote mt-8">
              Contact us
            </p>
            <p className="typo-body mt-1.5">
              +123456789 hey@yourdomain.com
            </p>
          </div>
          <div className="w-full md:w-2/3 relative">
            <Image
              image={getImage(data.mapImage)}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

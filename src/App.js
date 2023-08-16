import { useState } from "react";
import Header from "./components/Header/Header";
import LinkInput from './components/UI/Linkinput/Linkinput';
import UrlList from "./components/UrlsList/UrlList";
import introImg from './images/illustration-working.svg'
import brandIcon from './images/icon-brand-recognition.svg';
import recordsIcon from './images/icon-detailed-records.svg';
import customizableIcon from './images/icon-fully-customizable.svg';
import footerLogo from './images/logo-footer.svg';
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";


function App() {

  const [urlArray, setUrlArray] = useState([]);


  const onShortenerURLHandler = (object) => {
    setUrlArray(urlArray.concat(object));
  }


  return (
    <div className="App">

      <Header />

      <main>

        <section className="introduction">

          <div className="introduction__illustration">
            <img src={introImg} alt='illustration man working. icon for the first section'/>
          </div>

          <div className="introduction__text">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
            <button>Get Started</button>
          </div>

        </section>

        <section className="shortened-links">

          <div className="shortened-links__container">
            <LinkInput onShortener={onShortenerURLHandler}/>
            <UrlList array={urlArray}/>
          </div>

        </section>

        <section className="information">

          <div className="information__text">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
          </div>

          <div className="information__graphs">

            <ul className="information__graphs__list">

              <li className="information__graphs__list__item">

                <div>
                  <img src={brandIcon}/>
                </div>

                <h3>Brand Recognition</h3>

                <p>Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.</p>

              </li>

              <li className="information__graphs__list__item">

                <div>
                  <img src={recordsIcon}/>
                </div>

                <h3>Detailed Records</h3>

                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>

              </li>

              <li className="information__graphs__list__item">

                <div>
                  <img src={customizableIcon}/>
                </div>

                <h3>Fully Customizable</h3>

                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>

              </li>



            </ul>

          </div>

          <hr className="information__line"/>

        </section>

        <section className="started">
          <span>Boost your links today</span>
          <button>Get Started</button>
        </section>

      </main>

      <footer >

        <div className="footer">
          <img src={footerLogo} alt='white page logo' className="footer__logo"/>

          <nav className="footer__navbar">
            <ul className="footer__navbar__list">

              <li className="footer__navbar__list__option">Features
                <ul className="footer__navbar__list__option__list">
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              </li>

              <li className="footer__navbar__list__option">Resources
                <ul className="footer__navbar__list__option__list">
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </li>

              <li className="footer__navbar__list__option">Company
                <ul className="footer__navbar__list__option__list">
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </li>

            </ul>
          </nav>

          <div className="footer__sotial-media">
            <ul className="footer__sotial-media__list">
              <li>
                <AiFillFacebook className="icon"/>
              </li>

              <li>
                <AiOutlineTwitter className="icon"/>
              </li>

              <li>
                <BsPinterest className="icon"/>
              </li>

              <li>
                <AiOutlineInstagram className="icon"/>
              </li>

            </ul>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;

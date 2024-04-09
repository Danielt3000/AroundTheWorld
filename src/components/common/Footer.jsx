import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import FooterLogo from '../../assets/img/footer-logo.svg'

function Footer() {
  const dispatch = useDispatch();

  return (
    <>
      <footer>
        <div className="copyright">
          <img src={FooterLogo} alt="logo" onClick={() => dispatch(push('/'))} />
          <p className="copy">© 2021 TripAdvisor LLC All rights reserved.</p>
        </div>
        <div className="privacy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use </a>
          <a href="#">Sitemap</a>
        </div>
        <div className="version">
          <p>
            This is the version of our website addressed to speakers of English
            in India. If you are a resident of another country <br />
            or region, please select the appropriate versio of Tripadvisor for
            your country or region in the drop-down menu. more
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

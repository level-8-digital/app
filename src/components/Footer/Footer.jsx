/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({
  className,
  lineClassName,
  line = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-31.svg",
  groupClassName,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  divClassName3,
  workServicesAboutClassName,
  facebookInstagramClassName,
  divClassName4,
  divClassName5,
  groupClassNameOverride,
  overlapGroupClassName,
  divClassName6,
  vectorClassName,
  vector = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/vector.svg",
  frameClassName,
  frame = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/frame-313.svg",
  groupClassName1,
  groupClassName2,
  divClassName7,
  imgClassName,
  group = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/group-313-1.png",
  frameClassNameOverride,
  divClassName8,
  subtractClassName,
  subtract = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-44.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <img className={`line-3 ${lineClassName}`} alt="Line" src={line} />
      <div className={`group-9 ${groupClassName}`}>
        <div className={`text-wrapper-6 ${divClassName}`}>Level8Digital</div>
        <div className={`text-wrapper-7 ${divClassNameOverride}`}>®</div>
      </div>
      <div className={`text-wrapper-8 ${divClassName1}`}>Discover</div>
      <div className={`text-wrapper-9 ${divClassName2}`}>Find Us On</div>
      <p className={`text-wrapper-10 ${divClassName3}`}>
        Interested in keeping up-to-date about the latest in design trends in Manchester, England? We’ve got you
        covered.
      </p>
      <p className={`work-services-about ${workServicesAboutClassName}`}>
        Work <br />
        Services <br />
        About <br />
        Blog Archive
        <br />
        Contact Us
      </p>
      <div className={`facebook-instagram ${facebookInstagramClassName}`}>
        Facebook
        <br />
        Instagram
        <br />
        Youtube
        <br />
        LinkedIn
        <br />
        Twitter
      </div>
      <p className={`text-wrapper-11 ${divClassName4}`}>
        By subscribing to our newsletter you agree to our privacy policy and will get commercial communication.
      </p>
      <p className={`text-wrapper-12 ${divClassName5}`}>Copyright ©2022 level8digital.com. All rights reserved.</p>
      <div className={`overlap-group-wrapper ${groupClassNameOverride}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className={`text-wrapper-13 ${divClassName6}`}>Enter Email Address Here</div>
          <img className={`vector-3 ${vectorClassName}`} alt="Vector" src={vector} />
        </div>
      </div>
      <img className={`frame-2 ${frameClassName}`} alt="Frame" src={frame} />
      <div className={`group-10 ${groupClassName1}`}>
        <div className={`group-11 ${groupClassName2}`}>
          <div className={`text-wrapper-14 ${divClassName7}`}>Technologies We Use</div>
          <img className={`group-12 ${imgClassName}`} alt="Group" src={group} />
        </div>
        <div className={`frame-3 ${frameClassNameOverride}`}>
          <p className={`text-wrapper-15 ${divClassName8}`}>Schedule A Free Discovery Session</p>
          <img className={`subtract-2 ${subtractClassName}`} alt="Subtract" src={subtract} />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
  vector: PropTypes.string,
  frame: PropTypes.string,
  group: PropTypes.string,
  subtract: PropTypes.string,
};

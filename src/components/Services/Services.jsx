/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Services = ({
  cardStates,
  className,
  groupClassName,
  frameClassName,
  frame = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-79.svg",
  groupClassNameOverride,
  groupWrapperClassName,
  divClassName,
  divClassNameOverride,
  vectorClassName,
  vector = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/vector-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    cardStates: cardStates || "branding",
  });

  return (
    <div
      className={`services ${state.cardStates} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["branding", "development-2", "development", "marketing-2", "marketing"].includes(state.cardStates) && (
        <div className={`group-44 ${groupClassName}`}>
          {state.cardStates === "branding" && (
            <>
              <img className={`frame ${frameClassName}`} alt="Frame" src={frame} />
              <div className={`text-wrapper ${groupClassNameOverride}`}>Branding</div>
            </>
          )}

          {["development-2", "development", "marketing-2", "marketing"].includes(state.cardStates) && (
            <div
              className={`group-44 ${
                ["development", "marketing"].includes(state.cardStates)
                  ? groupWrapperClassName
                  : ["development-2", "marketing-2"].includes(state.cardStates)
                  ? frameClassName
                  : undefined
              }`}
            >
              {state.cardStates === "marketing" && (
                <>
                  <div className="div">Marketing</div>
                  <img
                    className="img"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-80.svg"
                  />
                </>
              )}

              {["development-2", "development", "marketing-2"].includes(state.cardStates) && (
                <div className={`group ${state.cardStates === "development" ? divClassName : undefined}`}>
                  {["development", "marketing-2"].includes(state.cardStates) && (
                    <>
                      <div
                        className={`development ${
                          state.cardStates === "development" ? divClassNameOverride : undefined
                        }`}
                      >
                        {state.cardStates === "development" && <>Development</>}

                        {state.cardStates === "marketing-2" && <>Marketing</>}
                      </div>
                      <img
                        className={`vector ${state.cardStates === "development" ? vectorClassName : undefined}`}
                        alt="Vector"
                        src={
                          state.cardStates === "marketing-2"
                            ? "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-79-1.svg"
                            : vector
                        }
                      />
                    </>
                  )}

                  {state.cardStates === "development-2" && (
                    <>
                      <div className="group-2">
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18-2.svg"
                        />
                        <img
                          className="line-2"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18-2.svg"
                        />
                        <div className="group-3">
                          <div className="text-wrapper-2">Branding</div>
                          <img
                            className="subtract"
                            alt="Subtract"
                            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-12.svg"
                          />
                        </div>
                        <div className="group-4">
                          <div className="text-wrapper-2">Film Production</div>
                          <img
                            className="subtract"
                            alt="Subtract"
                            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-12.svg"
                          />
                        </div>
                        <div className="group-5">
                          <div className="text-wrapper-2">Copywriting</div>
                          <img
                            className="subtract"
                            alt="Subtract"
                            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-12.svg"
                          />
                        </div>
                      </div>
                      <p className="elon-is-the-nordic">
                        Elon is the Nordic region&#39;s largest retail chain for consumer electronics and home
                        appliances, with over 400 stores in Sweden alone. Learn about their recent new online store
                        launch on the Magento Commerce below.
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {["development-2", "marketing-2"].includes(state.cardStates) && (
            <div className={`group-6 ${groupClassNameOverride}`}>
              {state.cardStates === "marketing-2" && (
                <>
                  <div className="group-2">
                    <img
                      className="line"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18.svg"
                    />
                    <img
                      className="line-2"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18.svg"
                    />
                    <div className="group-3">
                      <div className="text-wrapper-2">Branding</div>
                      <img
                        className="subtract"
                        alt="Subtract"
                        src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
                      />
                    </div>
                    <div className="group-4">
                      <div className="text-wrapper-2">Film Production</div>
                      <img
                        className="subtract"
                        alt="Subtract"
                        src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
                      />
                    </div>
                    <div className="group-5">
                      <div className="text-wrapper-2">Copywriting</div>
                      <img
                        className="subtract"
                        alt="Subtract"
                        src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
                      />
                    </div>
                  </div>
                  <p className="elon-is-the-nordic">
                    Elon is the Nordic region&#39;s largest retail chain for consumer electronics and home appliances,
                    with over 400 stores in Sweden alone. Learn about their recent new online store launch on the
                    Magento Commerce below.
                  </p>
                </>
              )}

              {state.cardStates === "development-2" && (
                <>
                  <div className="text-wrapper-3">Development</div>
                  <img
                    className="vector-2"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/vector-3.svg"
                  />
                </>
              )}
            </div>
          )}
        </div>
      )}

      {state.cardStates === "branding-2" && (
        <>
          <div className="group-7">
            <img
              className="frame"
              alt="Frame"
              src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-79-1.svg"
            />
            <div className="text-wrapper-4">Branding</div>
          </div>
          <div className="group-8">
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18.svg"
            />
            <img
              className="line-2"
              alt="Line"
              src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-18.svg"
            />
            <div className="group-3">
              <div className="text-wrapper-5">Branding</div>
              <img
                className="subtract"
                alt="Subtract"
                src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
              />
            </div>
            <div className="group-4">
              <div className="text-wrapper-5">Film Production</div>
              <img
                className="subtract"
                alt="Subtract"
                src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
              />
            </div>
            <div className="group-5">
              <div className="text-wrapper-5">Copywriting</div>
              <img
                className="subtract"
                alt="Subtract"
                src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract-6.svg"
              />
            </div>
          </div>
          <p className="p">
            Elon is the Nordic region&#39;s largest retail chain for consumer electronics and home appliances, with over
            400 stores in Sweden alone. Learn about their recent new online store launch on the Magento Commerce below.
          </p>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.cardStates === "branding") {
    switch (action) {
      case "mouse_enter":
        return {
          cardStates: "branding-2",
        };
    }
  }

  if (state.cardStates === "branding-2") {
    switch (action) {
      case "mouse_leave":
        return {
          cardStates: "branding",
        };
    }
  }

  if (state.cardStates === "marketing") {
    switch (action) {
      case "mouse_enter":
        return {
          cardStates: "marketing-2",
        };
    }
  }

  if (state.cardStates === "marketing-2") {
    switch (action) {
      case "mouse_leave":
        return {
          cardStates: "marketing",
        };
    }
  }

  if (state.cardStates === "development") {
    switch (action) {
      case "mouse_enter":
        return {
          cardStates: "development-2",
        };
    }
  }

  if (state.cardStates === "development-2") {
    switch (action) {
      case "mouse_leave":
        return {
          cardStates: "development",
        };
    }
  }

  return state;
}

Services.propTypes = {
  cardStates: PropTypes.oneOf(["branding", "branding-2", "development", "marketing", "development-2", "marketing-2"]),
  frame: PropTypes.string,
  vector: PropTypes.string,
};

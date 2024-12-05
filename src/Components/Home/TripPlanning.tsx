import { FunctionComponent } from "react";
// import SurfingImage from "./SurfingImage";
// import "./TripPlanning.css";

export type TripPlanningType = {
  className?: string;
};

const TripPlanning: FunctionComponent<TripPlanningType> = ({
  className = "",
}) => {
  return (
    <section className={`trip-planning ${className}`}>
      <div className="trip-description">
        <div className="trip-title">
          <div className="please-plane-your-trip-parent">
            <h1 className="please-plane-your">Please Plane Your Trip</h1>
            <div className="book-your-custom">{`Book your custom tour `}</div>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-details">
            <div className="email-info">
              <div className="email-input">
                <div className="contact-name">
                  <div className="contact-name-child" />
                  <div className="john-michle">John Michle</div>
                  <div className="your-name">Your Name</div>
                </div>
                <div className="email-details">
                  <div className="rectangle-parent">
                    <div className="frame-child" />
                    <img className="frame-item" alt="" src="/polygon-5.svg" />
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-76@2x.png"
                    />
                  </div>
                  <div className="phone-number">
                    <div className="phone-number-input">
                      <div className="phone-number-icon-parent">
                        <div className="phone-number-icon">
                          <div className="phone-icon">+1</div>
                        </div>
                        <div className="line-wrapper">
                          <div className="line-div" />
                        </div>
                        <div className="frame-child1" />
                        <div className="phone-number-label">
                          <div className="clippath">3123456789</div>
                        </div>
                      </div>
                    </div>
                    <div className="whatsappphone-number">
                      whatsapp/phone Number*
                    </div>
                  </div>
                </div>
                <div className="number-of-persons">
                  <div className="number-of-persons-input">
                    <div className="rectangle-group">
                      <div className="frame-child2" />
                      <div className="number-of-persons-icon">
                        <div className="number-of-persons-icon-child" />
                        <div className="div">15</div>
                      </div>
                      <div className="polygon-wrapper">
                        <img
                          className="polygon-icon"
                          alt=""
                          src="/polygon-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="number-of-persons1">Number of Persons*</div>
                </div>
              </div>
              <div className="rectangle-container">
                <div className="frame-child3" />
                <div className="clippath1">9</div>
                <div className="location-info">
                  <img className="clippath-icon" alt="" src="/clippath.svg" />
                </div>
                <div className="trip-days">Trip Days*</div>
              </div>
              <div className="group-div">
                <div className="frame-child4" />
                <div className="skardu">Skardu</div>
                <div className="destination-icon">
                  <img
                    className="destination-icon-child"
                    alt=""
                    src="/polygon-7.svg"
                  />
                </div>
                <div className="distination">Distination*</div>
              </div>
            </div>
            <div className="email-info1">
              <div className="rectangle-parent1">
                <div className="frame-child5" />
                <div className="demotextgmailcom">Demotext@gmail.com</div>
                <div className="email">Email*</div>
              </div>
              <div className="frame-group">
                <div className="rectangle-parent2">
                  <div className="frame-child6" />
                  <div className="couple">Couple</div>
                  <div className="couple-icon">
                    <img
                      className="couple-icon-child"
                      alt=""
                      src="/polygon-2.svg"
                    />
                  </div>
                  <div className="category">Category*</div>
                </div>
                <div className="frame-container">
                  <div className="your-city-wrapper">
                    <div className="your-city">Your City*</div>
                  </div>
                  <div className="rectangle-parent3">
                    <div className="frame-child7" />
                    <div className="city-icon">
                      <div className="city-icon-child" />
                      <div className="new-york">New york</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child8" />
                <div className="may-2023-wrapper">
                  <div className="may-2023">15,may 2023</div>
                </div>
                <img className="group-icon1" alt="" src="/group.svg" />
              </div>
              <div className="rectangle-parent5">
                <div className="frame-child9" />
                <div className="by-air">by air</div>
                <img className="frame-child10" alt="" src="/polygon-4.svg" />
                <div className="tour-by-transportation">
                  Tour By Transportation*
                </div>
              </div>
            </div>
          </div>
          <div className="message-input">
            <div className="message-info">
              <div className="please-let-me">
                Please! Let me know if you wand to us to ake care of any things
                specific.
              </div>
            </div>
            <div className="message-submission">
              <div className="message-content">
                <div className="message-content-child" />
                <div className="message">Message</div>
              </div>
              <div className="button">
                <div className="button-child" />
                <b className="submit">Submit</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="surfing-ad">
        <div className="ad-content">
          {/* <SurfingImage
            imageCells="/rectangle-30@2x.png"
            group="/group-1.svg"
          /> */}
          <div className="surfing-image1">
            <img className="surfing-image-child" alt="" src="/line-5.svg" />
          </div>
          {/* <SurfingImage
            imageCells="/rectangle-30-1@2x.png"
            group="/group-2.svg"
          /> */}
          <div className="surfing-image2">
            <img className="surfing-image-item" alt="" src="/line-5-1.svg" />
          </div>
          {/* <SurfingImage
            imageCells="/rectangle-30-2@2x.png"
            group="/group-3.svg"
          /> */}
          <div className="surfing-image3">
            <img className="surfing-image-inner" alt="" src="/line-5-2.svg" />
          </div>
          {/* <SurfingImage
            imageCells="/rectangle-30-3@2x.png"
            group="/group-2.svg"
          /> */}
          <div className="ad-navigation">
            <img
              className="ad-navigation-child"
              loading="lazy"
              alt=""
              src="/line-5-1.svg"
            />
            <div className="navigation-dots">
              <img
                className="navigation-dots-child"
                loading="lazy"
                alt=""
                src="/rectangle-30-4@2x.png"
              />
              <div className="dot-container">
                <div className="dot-position">
                  <div className="dot-info">
                    <div className="dot-highlight">
                      <img
                        className="group-icon2"
                        loading="lazy"
                        alt=""
                        src="/group-2.svg"
                      />
                    </div>
                    <b className="nov-20191">9 Nov, 2019</b>
                  </div>
                  <div className="caption">
                    <div className="the-surfing-man-container1">
                      <p className="the-surfing-man1">{`The Surfing man will blow your `}</p>
                      <p className="mind1">mind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="ad-content-child"
            loading="lazy"
            alt=""
            src="/line-5-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;
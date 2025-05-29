import React from "react";
import d1 from "./Assets/Media/d1.jpg";
import d2 from "./Assets/Media/d2.jpg";
import d3 from "./Assets/Media/d3.jpg";

export default function Services() {
  return (
    <>
      <div className="heading-2 text-center">
        <h1>Our Services</h1>
        <h1>All Your Health Needs at One Place</h1>
      </div>

      <div className="container">
        <div className="box-1">
          <div className="row">
            <div className="col-lg-4" data-aos="zoom-in">
              <img src={d1} alt="d1" className="services" />
              <div className="text1 mt-3">
                <h3>Sergeon</h3>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto minima ea inventore et magni ad.
                </h5>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in">
              <img src={d2} alt="d1" className="services" />
              <div className="text1 mt-3">
                <h3>Internal medicine</h3>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto minima ea inventore et magni ad.
                </h5>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in">
              <img src={d3} alt="d1" className="services-1" />
              <div className="text1 mt-3">
                <h3>Neurologist</h3>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto minima ea inventore et magni ad.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

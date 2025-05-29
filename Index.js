import React from "react";
import hero from "./Assets/Media/hero.png";
import appointment from "./Assets/Media/appointment.jpg";
import c1 from "./Assets/Media/c1.jpg";
import c2 from "./Assets/Media/c2.jpg";
import c3 from "./Assets/Media/c3.jpg";
import doctor from "./Assets/Media/doctor.jpg";

export default function Index() {
  return (
    <>
      <div className=" container" id="hero">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="hero-section">
              <h1>Best Health & cure service You can Trust.</h1>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nam a iure, nihil ad similique exercitationem magni rem sit
                voluptatum modi? Placeat voluptatibus autem quo iusto fugiat
                harum, et deserunt. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Minus, nam a iure, nihil ad similique
                exercitationem magni rem sit voluptatum modi? Placeat
                voluptatibus autem quo iusto fugiat harum, et deserunt. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Minus, nam a
                iure, nihil ad similique exercitationem magni rem sit voluptatum
                modi? Placeat voluptatibus autem quo iusto fugiat harum, et
                deserunt. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Minus, nam a iure, nihil ad similique exercitationem magni
                rem sit voluptatum modi? Placeat voluptatibus autem quo iusto
                fugiat harum, et deserunt. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Minus, nam a iure, nihil ad
                similique exercitationem magni rem sit voluptatum modi? Placeat
                voluptatibus autem quo iusto fugiat harum, et deserunt.
              </h4>
              <button className="btn btn-outline-success mt-4" type="submit">
                Book An Appointment
              </button>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <img src={hero} alt="hero" className="hero text-center" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="appointment-section">
              <h1>Book an Appointment & You're Done!</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dicta fugiat voluptates aspernatur praesentium
                corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur nulla dolorum Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Minus, nam a iure, nihil ad
                similique exercitationem magni rem sit voluptatum modi? Placeat
                voluptatibus autem quo iusto fugiat harum, et deserunt. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Minus, nam a
                iure, nihil ad similique exercitationem magni rem sit voluptatum
                modi? Placeat voluptatibus autem quo iusto fugiat harum, et
                deserunt.
              </h4>
              <button className="btn btn-outline-success mt-4" type="submit">
                Reserve My Slot
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-section text-center mt-3 " data-aos="zoom-in">
              <img
                src={appointment}
                alt="appointment"
                className="hero2 text-center"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="heading text-center">What Our Clients Say</h1>
      <div className="client-say">
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="zoom-in">
              <div className="box-1">
                <h6 className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quaerat eos ea fugiat veritatis exercitationem id ipsam quo!
                  Assumenda, voluptates!
                </h6>

                <img src={c1} alt="c1" className="customers" />
                <span className="name">Grace Hill</span>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in">
              <div className="box-1">
                <h6 className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quaerat eos ea fugiat veritatis exercitationem id ipsam quo!
                  Assumenda, voluptates!
                </h6>

                <img src={c2} alt="c1" className="customers" />
                <span className="name">Jamie Carter</span>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in">
              <div className="box-1">
                <h6 className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quaerat eos ea fugiat veritatis exercitationem id ipsam quo!
                  Assumenda, voluptates!
                </h6>

                <img src={c3} alt="c1" className="customers" />
                <span className="name">Robert Ownes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="heading text-center">We Make Treatements Fun!</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={doctor} alt="doctor" className="doctor" />
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="doc-details">
              <h2 className="doc-name text-center">Meet Dr. Ram Patel</h2>
              <h4 className="para-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae perspiciatis praesentium qui vitae tenetur
                dignissimos?
              </h4>
              <h4 className="para-2 text-center">15+ Uears Experience</h4>
              <h4 className="para-2 text-center">Highly Equipped Clinic</h4>
              <h4 className="para-2 text-center">
                Good quality car & services
              </h4>
              <button
                className="btn-2 btn-outline-success mt-4 text-center"
                type="submit"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

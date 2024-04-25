import React from "react";
import Title from "./com/Title";
function Rigister() {
  return (
    <div className="register-section">
      <Title title="Taking rides to a newer level" img="assets/img/logo.png" />
      <h2 className="bold">REGISTER NOW</h2>

      <form action="" method="">
        <div className="flex">
          <input
            class="input-name"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            class="input-email"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div
          className="flex"
          style={{ alignItems: "baseline", marginTop: "20px" }}
        >
          <input
            class="input-number"
            type="tel"
            placeholder="Mobile"
            name="mobile"
          />
          <div class="services-checkbox">
            <label>How can We Help You :</label>
            <br />
            <input
              type="checkbox"
              id="service1"
              name="test drive"
              value="Book a Test Drive"
            />
            <label htmlFor="service1">Book a Test Drive</label>
            <br />
            <input
              type="checkbox"
              id="service2"
              name="availability"
              value="Availability"
            />
            <label htmlFor="service2">Availability</label>
            <br />
            <input type="checkbox" id="service3" name="quote" value="Quote" />
            <label htmlFor="service3">Quote</label>
            <br />
            <input
              type="checkbox"
              id="service4"
              name="call"
              value="Call Back"
            />
            <label htmlFor="service4">Call Back</label>
          </div>
        </div>
        <label>Vehicle Your Interest :</label>
        <br />
        <br />

        <div class="select">
          <select name="vehicle" id="vehicle">
            <option value="MT-15 Ver 2.0">MT-15 Ver 2.0</option>

            <option value="FZ-FI">FZ-FI</option>

            <option value="FZ-S FI">FZ-S FI</option>

            <option value="FZ -X">FZ -X</option>

            <option value="R15 V4">R15 V4</option>

            <option value="R15S">R15S</option>

            <option value="R15M">R15M</option>

            <option value="Aerox 155">Aerox 155</option>

            <option value="RAY ZR 125 Fi">RAY ZR 125 Fi</option>

            <option value="RAY ZR Street Rally 125Fi">
              RAY ZR Street Rally 125Fi
            </option>
          </select>
        </div>

        <div className="center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Rigister;

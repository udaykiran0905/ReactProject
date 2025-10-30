import React from "react";
import { footMenu, footSocial } from "../../data/footerData"; 

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 mt-5">
      <div className="container">
        <div className="row justify-content-between px-0">
          <div className="col-md-4">
            <h5>Tech-Shop</h5>
            <p className="opacity-75">
              Subscribe to our Email alerts to receive early discount offers, and new products info.
            </p>
            <form>
              <input
                type="email"
                className="form-control bg-dark w-75 text-white"
                placeholder="Email Address*"
                aria-label="Email Address"
              />
              <br />
              <button className="btn btn-danger" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          {footMenu.map((section) => (
            <div className="col-md-2" key={section.id}>
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.menu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="text-light opacity-75 text-decoration-none mb-2 d-block"
                    >
                      {item.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        <div className="mt-3 d-flex justify-content-between">
          <div>
            <p className="mb-0">2024 All Rights Reserved. Built by ADARSHA HELVAR</p>
          </div>

          <div className="d-flex">
            {footSocial.map((social) => {
              const Icon=social.icon
              return(
              <a
                key={social.id}
                href={social.path}
                className="text-light opacity-75 me-4 fs-5 "
              >
                <Icon/>
              </a>
           ) })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

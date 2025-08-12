import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="section section--contact" id="contact">
      <div className="section__inner">
        <div className="block">
          <div className="contact-content">
            <a className="pre" href="#contact">
              Get in touch
            </a>
            <h2>
              For work inquiries<br />
              please email:<br />
              <span>
                <a href="mailto:harmeshgopinathan@gmail.com">harmeshgopinathan@gmail.com</a>
              </span>
            </h2>
            <p className="lead">
              More links:{" "}
              <a href="https://dribbble.com/hellovolker" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              ,{" "}
              <a href="https://twitter.com/hellovolker" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              , and{" "}
              <a href="https://www.linkedin.com/in/ottovolker" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
              .
            </p>
          </div>

          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313115539!2d80.04386084350367!3d13.047473316963913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1745175306772!5m2!1sen!2sin"
                width={600}
                height={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Location Map"
              ></iframe>
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState, useRef, useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { phone, tel, email, serviceData } from '../data/constants';

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service && formRef.current) {
      formRef.current.service.value = service;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setShowMessage(true);
    form.reset();
  };

  return (
    <>
      <PageHero
        kicker="Contact Tint Masters"
        title="Let's talk about the job."
        copy="Call, email or send a short brief. The more context you share, the more useful our recommendation can be."
      />

      <section className="section section-fog">
        <div className="shell contact-grid">
          <section className="contact-info">
            <p className="eyebrow">Visit or get in touch</p>
            <h2>Start with a conversation.</h2>
            <div className="contact-points">
              <div>
                <small>Call</small>
                <a href={`tel:${tel}`}>{phone}</a>
              </div>
              <div>
                <small>Email</small>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <small>Location</small>
                <p>15223 10th Close<br />Sunningdale 2, Harare, Zimbabwe</p>
              </div>
            </div>
          </section>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" required autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="service">Service needed</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                {serviceData.map(([title]) => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Tell us about the project</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Vehicle type, location, approximate scope or timing"
              />
            </div>
            <button className="button button-primary" type="submit">Send enquiry</button>
            <p className={`form-message ${showMessage ? 'show' : ''}`} role="status">
              Thanks. Your enquiry is ready to send. A live site can connect this form to your email or CRM.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
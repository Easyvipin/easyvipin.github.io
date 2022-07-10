import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("maylyeeq");
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  }

  return (
    <div className="contact">
      <h1>Contact me &#x1F4E7;</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          required
        />
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Job offer , Project idea , feedback..  "
          cols="100"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <span className="success">
          {state.submitting ? <p>Sending &#x1F48C; ...</p> : null}
          {state.succeeded ? <p>Thank You &#x1F33B;</p> : null}
        </span>
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

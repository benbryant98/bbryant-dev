import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26u5byq",
        "template_ykdhox5",
        form.current,
        "JW1YXRxg27AIBedBh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };
  return (
    <section id="contact" className="text-white">
      <header className="has-text-centered">
        <h1
          data-text="CONTACT ME"
          className="flex justify-center text-reflect text-5xl md:text-6xl text-slate-100 opacity-80 relative m-1 top-3 section-header"
        >
          CONTACT ME
        </h1>
      </header>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-900 py-10 flex flex-col items-center text-center text-2xl"
      >
        <div className="field">
          <label className="label">Name</label>
          <div className="control m-2">
            <input
              name="form_name"
              className="input rounded p-1 text-black"
              type="text"
              placeholder="John Smith"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email Address</label>
          <div className="control has-icons-left m-2">
            <input
              name="form_email"
              className="input rounded p-1 text-black"
              type="email"
              placeholder="email@company.com"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Subject</label>
          <div className="control m-2">
            <div className="select text-black">
              <select name="form_subject" className="rounded">
                <option>Job Opportunity</option>
                <option>Project Questions</option>
                <option>General Inquiry</option>
                <option>Report a Bug</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control m-2">
            <textarea
              name="form_message"
              className="textarea text-black rounded p-6"
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>
        <div className="control">
          <button
            id="formSubmit"
            className="button p-1 mb-2 bg-fuchsia-600 rounded hover:p-2 hover:mb-0"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

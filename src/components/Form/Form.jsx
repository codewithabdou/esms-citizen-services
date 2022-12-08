import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

import "./FormStyles.css";

const Form = () => {
  const [submitted, setsubmitted] = useState(false);

  return (
    <div className="form px-5 pb-8">
      <form className="flex flex-col -space-y-2">
        <label>Name</label>
        <br />
        <input
          type="text"
          name="user_name"
          placeholder="Example : Habouche Abderrahmène"
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Example : kk_habouche@esi.dz"
        ></input>
        <br />
        <label>Subject</label>
        <br />
        <input
          type="text"
          name="user_subject"
          placeholder="Example : Collaboration ,encouragement ..."
        ></input>
        <br />
        <label>Message</label>
        <br />
        <textarea
          name="user_message"
          type="text"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <br />
        <button
          onClick={() => {
            setsubmitted(true);
          }}
          className="w-32 self-center rounded-full border-[1px] border-black bg-white py-3 px-3 font-bold text-black shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
        >
          submit
        </button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {submitted && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(2, 230, 127, 0.929)",
              marginTop: "1rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              maxWidth: "20rem",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "black",
                marginRight: "0.5rem",
              }}
            >
              Your message has been sent succesfully
            </p>
            <MdCancel
              onClick={() => {
                setsubmitted(false);
              }}
              size={20}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

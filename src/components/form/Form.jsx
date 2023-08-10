import SendButton from "./SendButton";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wnkkau4",
        "template_d72hz6v",
        e.target,
        "Se0vS3h9UCqD0xrWQ"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <form
        className="flex flex-col gap-4 py-8"
        onSubmit={(e) => {
          sendEmail(e);
        }}
      >
        <input
          type="text"
          placeholder="Name*"
          name="from_name"
          className="bg-palette-600 border-2 border-palette-500 h-12 rounded-md p-2 text-palette-100 font-semibold outline-none focus:bg-palette-500 focus:border-palette-600"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email*"
          name="email"
          className="bg-palette-600 border-2 border-palette-500 h-12 rounded-md p-2 text-palette-100 font-semibold outline-none focus:bg-palette-500 focus:border-palette-600"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          placeholder="Type your message here*"
          name="message"
          className="bg-palette-600 border-2 border-palette-500 h-48 rounded-md p-2 text-palette-100 font-semibold outline-none focus:bg-palette-500 focus:border-palette-600"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <SendButton />
      </form>
    </>
  );
}

export default Form;

function Form() {
  return (
    <>
      <form className="flex flex-col gap-4 py-8">
        <input type="text" placeholder="Name*" className="bg-palette-600 border-2 border-palette-500 h-12 rounded-md p-2"/>
        <input type="email" placeholder="Email*" className="bg-palette-600 border-2 border-palette-500 h-12 rounded-md p-2"/>
        <textarea placeholder="Type your message here*" className="bg-palette-600 border-2 border-palette-500 h-48 rounded-md p-2"></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Form;

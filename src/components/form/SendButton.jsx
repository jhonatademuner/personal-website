import { BsSendFill } from "react-icons/bs";

function SendButton() {
  return (
    <>
      <button
        type="submit"
        className="flex justify-center items-center gap-2 rounded-md bg-palette-300 px-4 py-2 w-fit text-lg font-semibold"
      >
        <BsSendFill />
        Send Message
      </button>
    </>
  );
}

export default SendButton;

import { BsSendFill } from "react-icons/bs";

function SendButton() {
  return (
    <>
      <button
        type="submit"
        className="flex justify-center items-center gap-2 rounded-md bg-palette-300 h-12 px-4 mt-4 w-fit text-lg font-semibold"
      >
        <BsSendFill />
        Send Message
      </button>
    </>
  );
}

export default SendButton;

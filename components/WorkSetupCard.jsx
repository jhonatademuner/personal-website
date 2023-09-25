import { MdLaptopChromebook, MdOutlineWork } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";

function WorkSetupCard() {
  return (
    <div className="flex box-border w-[48rem] rounded-2xl overflow-hidden bg-primary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-[0_6px_15px_rgba(100,100,197,0.1)]">
      <div className="flex flex-col items-center justify-center text-xl gap-2 text-text bg-secondary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 p-4 shrink-0 w-32">
        <span className="text-4xl">
          <MdOutlineWork />
        </span>
        <p className=" text-center">
          Setup de
          <br />
          trabalho
        </p>
      </div>
      <div className="flex w-full h-full justify-between items-center gap-8 p-4">
        <div className="flex flex-col h-full w-1/2 gap-2">
          <div className="flex text-primary gap-2 items-center mb-4">
            <span className="text-4xl">
              <MdLaptopChromebook />
            </span>
            <p className="text-lg">Notebook Specs</p>
          </div>
          <p className="text-text w-full flex justify-between">
            Modelo: <span className="text-primary">ThinkPad E14 Gen 4</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            SO: <span className="text-primary">Windows 11 Home</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Tela: <span className="text-primary">14&quot; Full HD Antirreflexo</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Memória: <span className="text-primary">8 GB DDR4 3200MHZ</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Armazenamento: <span className="text-primary">256 GB SSD</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Placa de vídeo: <span className="text-primary">Intel Iris® Xe</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Câmera: <span className="text-primary">HD (1280x720)</span>{" "}
          </p>
          
        </div>
        <div className="flex flex-col h-full w-1/2 gap-2">
          <div className="flex text-primary gap-2 items-center mb-4">
            <span className="text-4xl">
              <FaKeyboard />
            </span>
            <p className="text-lg">Periféricos:</p>
          </div>
          <p className="text-text w-full flex justify-between">
            Mouse: <span className="text-primary">Logitech K470</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Teclado: <span className="text-primary">Logitech M340</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Deskpad: <span className="text-primary">Couro 90x30</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Fone: <span className="text-primary">KZ EDX</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Microfone: <span className="text-primary">Fifine Ampligame</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Webcam: <span className="text-primary">Trust Taxon QHD</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Hub USB: <span className="text-primary">Ugreen 4-in-1 USB 3.0 </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkSetupCard;

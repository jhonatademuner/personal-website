import { PiComputerTowerFill } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function PersonalSetupCard() {
  return (
    <div className="flex box-border w-[48rem] rounded-2xl overflow-hidden bg-primary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-[0_6px_15px_rgba(100,100,197,0.1)]">
      <div className="flex flex-col items-center justify-center text-xl gap-2 text-text bg-secondary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 p-4 shrink-0 w-32">
        <span className="text-4xl">
          <FiUser />
        </span>
        <p className=" text-center">
          Setup
          <br />
          Pessoal
        </p>
      </div>
      <div className="flex w-full h-full justify-between items-center gap-8 p-4">
        <div className="flex flex-col h-full w-1/2 gap-2">
          <div className="flex text-primary gap-2 items-center mb-4">
            <span className="text-4xl">
              <PiComputerTowerFill />
            </span>
            <p className="text-lg">Computer Specs</p>
          </div>
          <p className="text-text w-full flex justify-between">
            Gabinete: <span className="text-primary">Aigo Darkflash DLM21</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Placa-mãe: <span className="text-primary">B450M Steel Legend</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Processador: <span className="text-primary">14&quot; Ryzen 7 5700g</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Memória: <span className="text-primary">16 GB DDR4 3000MHZ</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Armazenamento: <span className="text-primary">480 GB SSD</span>{" "}
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
            Mouse: <span className="text-primary">Delux M800</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Teclado: <span className="text-primary">Redragon Kumara</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Mousepad: <span className="text-primary">Fallen Pantera</span>{" "}
          </p>
          <p className="text-text w-full flex justify-between">
            Monitor: <span className="text-primary">Acer SA230</span>{" "}
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
        </div>
      </div>
    </div>
  );
}

export default PersonalSetupCard;

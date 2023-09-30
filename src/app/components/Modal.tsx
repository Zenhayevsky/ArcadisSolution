import { Children } from "react";
import { Button } from "./Button";

interface ModalProps {
  content: string;
  onClick: () => void;
  onClose: () => void;
  tittle: string;
}

export const Modal = ( props: ModalProps ) => {

  return (
    <div className="bg-primary-500/80 flex justify-center items-center border-primary-500 w-screen h-screen absolute top-0 left-0 z-10">
      <div className="rounded-lg grid grid-cols-5 gap-5 bg-primary-300 p-10 text-primary-400">
        <div className="col-span-3">
        {props.tittle}
        </div>
        <div className="col-span-5">
        {props.content}
        </div>
        <div className="col-span-2 col-start-1 mt-5 "> 
          <a className="text-green-900 cursor-pointer" onClick={props.onClose} > Close </a>
        </div>
        <div className="col-span-2 col-start-5 mt-5 "> 
          <Button tittle='Do it' onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
};
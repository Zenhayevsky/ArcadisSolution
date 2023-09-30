import { Children } from "react";
import { Button } from "./Button";
import { SInputText } from "../components/SInputText"

interface ModalSignUpProps {
  onClose: () => void;
}

export const ModalSignUp = ( props: ModalSignUpProps ) => {

  const signUp = () => {
    console.log('enviando');
  }

  return (
    <div className="bg-primary-500/80 flex justify-center items-center border-primary-500 rounded-lg w-screen h-screen absolute top-0 left-0 z-10">
      <div className="rounded-lg grid grid-cols-3 gap-5 bg-primary-300 p-10 text-primary-400">
        <div className="col-span-1">
        SIGN UP
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-2">
            <SInputText label="Name" type="text"/>
            <SInputText label="E-mail" type="text" />
            <SInputText label="Ocupation" type="text" />
          </div>
        </div>
        <div className="col-span-1 col-start-1 mt-5 "> 
          <a className="text-green-900 cursor-pointer" onClick={props.onClose} > Close </a>
        </div>
        <div className="col-span-1 col-start-3 mt-5 "> 
          <Button tittle='Sign up' onClick={() =>signUp()} />
        </div>
      </div>
    </div>
  );
};
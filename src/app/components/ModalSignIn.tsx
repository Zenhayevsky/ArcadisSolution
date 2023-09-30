import { Children } from "react";
import { Button } from "./Button";
import { SInputText } from "../components/SInputText";
import { useState } from 'react';

interface ModalSignUpProps {
  onClose: () => void;
  onSignIn: () => void;
}

export const  ModalSignIn = ( props: ModalSignUpProps ) => {

  const [emailSignIn, setEmailSignIn] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const signIn = () => {
    const emailInStorage = localStorage.getItem("email");
    const AuthorizedSignIn = (emailInStorage == emailSignIn);
    
    if (AuthorizedSignIn) {
      props.onClose();
      props.onSignIn();
      setInvalidEmail(false);
    }else {
      setInvalidEmail(true);
    }

    return AuthorizedSignIn;
  }

  return (
    <div className="bg-primary-500/80 flex justify-center items-center border-primary-500 rounded-lg w-screen h-screen absolute top-0 left-0 z-10">
      <div className="rounded-lg grid grid-cols-3 gap-5 bg-primary-300 p-10 text-primary-400">
        <div className="col-span-1">
        SIGN IN
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-2">
            <SInputText invalidData={invalidEmail} customOnChange={event => {setEmailSignIn(event.target.value)}} label="E-mail" type="text"/>
          </div>
        </div>
        <div className="col-span-1 col-start-1 mt-5 "> 
          <a className="text-green-900 cursor-pointer" onClick={props.onClose} > Close </a>
        </div>
        <div className="col-span-1 col-start-3 mt-5 "> 
          <Button tittle='Sign In' onClick={() =>signIn()} />
        </div>
      </div>
    </div>
  );
};
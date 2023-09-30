"use client";
import { Button } from './components/Button';
import { User } from 'lucide-react';
import patalogo from '../assets/logo-pata.svg';
import hamburgmenu from '../assets/hamburguer.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { ModalSignUp } from './components/ModalSignUp';
import { ModalSignIn } from './components/ModalSignIn';

import { HomeStartRight } from './components/HomeStartRight';

import * as chatGpt from '../../Back-end/chatGpt/index';
import { ResultTask } from './components/ResultTask';

export default function Home() {

  const [newtask, setNewTask] = useState(false);
  const [animal, setAnimal] = useState('');
  const [showCard, setShowcard] = useState(false);
  const [responseChatGpt, setResponseChatGpt] = useState('');
  const [cardChange, setCardChange] = useState(false);
  const [modalSignUP, setModalSignUP] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [emailKey, setEmailKey] = useState('');


  useEffect(() => {
    setResponseChatGpt(localStorage.getItem("respostaChatGPT") || 'Lets start')
  }, [cardChange]);

  const chatGptConsult = async (animal: string, tipeprompt: number) => {
    chatGpt.callChatGPT(animal, tipeprompt)
    setShowcard(true);
  };

  return (
  <main className='grid grid-cols-2 min-h-screen'>

    {modalSignUP && <ModalSignUp onClose={() => setModalSignUP(false)} />}
    {modalSignIn && <ModalSignIn onSignIn={() => setSignedIn(true)} onClose={() => setModalSignIn(false)} />}

    {/* left */}
    <div className='bg-[url(../assets/bg-stars.svg)] bg-cover p-16 bg-primary-300 bg-opacity-60 flex flex-col border-r border-white/10 items-start justify-between px-28 overflow-hidden py-16 relative'>
      {/* blur */}
      <div className='absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-red-700 opacity-50 blur-full'/>
      {/* sign in */}
      
      <div>
      <div className='flex'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-500'>
          <User className='h-5 w-5 text-primary-200'/>
        </div>
        { emailKey && signedIn ? <Image alt='logo arcadis solution' className='w-12' src={hamburgmenu}/> 
        :
        <p className='ml-3 text-sm leading-snug max-w-[144px]'>
          <a onClick={() => setModalSignUP(true)} className='cursor-pointer flex items-center text-left hover:text-gray-50 transition-colors'>
            <span className='underline'> 
              Create an account
            </span> 
          </a>
              to have benefits or
          <a onClick={() => {setModalSignIn(true); setEmailKey(localStorage.getItem("email") || '')}}  className='cursor-pointer flex items-center text-left hover:text-gray-50 transition-colors'>
            <span className='underline'>
              Sign in
            </span>
          </a>
        </p>
        }
        </div>
      </div>

      <div className='space-y-5'>
        <Image alt='logo arcadis solution' src={patalogo}/>
        { newtask ?
        (
          <>
            <div className='max-w-[420px] space-y-1'>
              <p className='text-lg leading-relaxed mb-4'>
                Enter the animal or species and then select the type of search you want to do
              </p>
              <input type="text" className="cursor-pointer rounded-md mb-16 h-8 w-full p-2
              focus:outline-none text-primary-500" onChange={event =>setAnimal(event.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Button onClick={() => {
                chatGptConsult(animal, 1);
                setCardChange(!cardChange);
              }} tittle="Taxonomy" />
              <Button onClick={() => {
                chatGptConsult(animal, 2);
                setCardChange(!cardChange);
              }} tittle="Ecological ctcs " />
              <Button onClick={() => {
                chatGptConsult(animal, 3);
                setCardChange(!cardChange);
              }} tittle="Threat level" />
            </div>
          </>
        ): 
        <>
          <HomeStartRight />
          <Button tittle='COMEÇAR A PESQUISA' onClick={() => {setNewTask(true)}} />
        </>}
      </div>
      <Footer/>
    </div>

    {/* right */}
    <div className='flex flex-col p-16 bg-primary-500 bg-cover'>
      {/* blur */}
      <div className='absolute left-80 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-primary-200 opacity-50 blur-full'/>
      <div className='flex flex-1 items-center justify-center'>
      { showCard ? <ResultTask result={responseChatGpt} />
      :
        <p className='text-center leading-relaxed w-[360px]'>
          Start your adventure through the animal world and get{' '}
          <span className=' hover:text-gray-50'>the most up-to-date information now!</span>
        </p>
      }
      </div>
    </div>

  </main>
  
  )
}
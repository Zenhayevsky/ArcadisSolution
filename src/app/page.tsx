"use client";
import { Button } from './components/Button';
import { User } from 'lucide-react';
import patalogo from '../assets/logo-pata.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';

import { HomeStartRight } from './components/HomeStartRight';

import * as chatGpt from '../../Back-end/chatGpt/index';
import { ResultTask } from './components/ResultTask';

export default function Home() {

  const [newtask, setNewTask] = useState(false);
  const [animal, setAnimal] = useState('');
  const [showCard, setShowcard] = useState(false);
  const [responseChatGpt, setResponseChatGpt] = useState('');
  const [cardChange, setCardChange] = useState(false);

  useEffect(() => {
    setResponseChatGpt(localStorage.getItem("respostaChatGPT") || 'Lets start')
  }, [cardChange]);

  const chatGptConsult = async (animal: string, tipeprompt: number) => {
    chatGpt.callChatGPT(animal, tipeprompt)
    setShowcard(true);
  };

  return (
  <main className='grid grid-cols-2 min-h-screen'>

    {/* left */}
    <div className='bg-[url(../assets/bg-stars.svg)] bg-cover p-16 bg-primary-300 bg-opacity-60 flex flex-col border-r border-white/10 items-start justify-between px-28 overflow-hidden py-16 relative'>
      {/* blur */}
      <div className='absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-red-700 opacity-50 blur-full'/>
      {/* sign in */}
      <a href='' className='flex items-center gap-3 text-left hover:text-gray-50 transition-colors'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-500'>
          <User className='h-5 w-5 text-gray- 500'/>
        </div>

        <p className='text-sm leading-snug max-w-[140px]'>
          <span className='underline'>Crie sua conta</span> e tenha acesso a benefícios 
        </p>
      </a>
    
        <div className='space-y-5'>
          <Image alt='logo arcadis solution' src={patalogo}/>
          { newtask ?
          (
            <>
              <div className='max-w-[420px] space-y-1'>
                <p className='text-lg leading-relaxed mb-4'>
                  Digite o animal o espécie e então selecione o tipo de pesquisa que deseja fazer
                </p>
                <input type="text" className="cursor-pointer rounded-md mb-16 h-8 w-full p-2
                focus:outline-none text-primary-500" onChange={event =>setAnimal(event.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-5 text-left">
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
          Você ainda realizou uma busca, comece a{' '}
          <span className=' hover:text-gray-50'>pesquisar agora!</span>
        </p>
      }
      </div>
    </div>

  </main>)
}

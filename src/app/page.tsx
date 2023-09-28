import { Button } from './components/Button';
import { User } from 'lucide-react'
import junglelogo from '../assets/logo-pata.svg'
import Image from 'next/image'

export default function Home() {
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

      {/* Hero */}
      <div className='space-y-5'>
        <Image alt='logo arcadis solution' src={junglelogo}/>
        
        <div className='max-w-[420px] space-y-1'>
          <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua fonte de dados taxonomicos</h1>
          <p className='text-lg leading-relaxed'>
            Obtenha dados atualizados sobre taxonomia e quaisquer animais.
          </p>
        </div>

        <a className='inline-block rounded-full bg-green-900 px-5 py-3 font-alt text-sm uppercase leading-none text-primary-200  hover:bg-green-800' href=''>
          CADASTRAR LEMBRANÇA
        </a>
      </div>

      {/* copyright */}
      <div className='text-sm leading-relaxed text-gray-200'>
        Feito com 💚 por Zenha {' '}
        <a
        target='_blank'
        rel='noreferrer'
        className='underline hover:text-gray-100' 
        href='https://github.com/Zenhayevsky'>
          github
        </a>
      </div>
    </div>

    {/* right */}
    <div className='flex flex-col p-16 bg-primary-500 bg-cover'>
      {/* blur */}
      <div className='absolute left-80 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-primary-200 opacity-50 blur-full'/>
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-center leading-relaxed w-[360px]'>
          Você ainda realizou uma busca, comece a{' '}
          <span className=' hover:text-gray-50'>pesquisar agora!</span>
        </p>
      </div>
    </div>

  </main>)
}

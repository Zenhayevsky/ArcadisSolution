import { Button } from '../components/Button';

export function TaskForm() {
  return (
    <>
      <div className='max-w-[420px] space-y-1'>
        <p className='text-lg leading-relaxed mb-4'>
          Digite o animal o espécie e então selecione o tipo de pesquisa que deseja fazer
        </p>
        <input type="text" className="rounded-md mb-16 h-8 w-full" />
      </div>
      <div className="grid grid-cols-3 gap-5 text-left">
        <Button tittle="Taxonomia" />
        <Button tittle="Crts. Ecologicas" />
        <Button tittle="Nível de ameaça" />
      </div>
    </>
  )
}
'use client';

export function ResultTask(props : any) {
  return (
    <div className="bg-green-900 text-primary-200 shadow-2xl p-10 rounded-lg">
      <p className='text-center leading-relaxed w-[360px]'>
        {props.result}
      </p>
    </div>
    
  );
}
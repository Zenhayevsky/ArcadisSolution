interface ButtonProps {
  tittle: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className="inline-block rounded-full bg-green-900 px-5 py-3 font-alt lg:text-sm md:text-xs uppercase 
            leading-none text-primary-200 hover:bg-green-800 hover:cursor-pointer" {...props}>
      {props.tittle}
    </button>
  );
}
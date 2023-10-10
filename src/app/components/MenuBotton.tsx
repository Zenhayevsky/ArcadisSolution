interface ButtonProps {
  tittle: string;
  onClick?: () => void;
}

export function MenuButton(props: ButtonProps) {
  return (
    <button className="hover:bg-primary-400 hover:text-primary-200 mt-2 font-semibold py-1 px-2 
            rounded-md bg-primary-300 text-primary-400" {...props}>
      {props.tittle}
    </button>
  );
}
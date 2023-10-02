import { Button } from "./Button";
import { MenuButton } from './MenuBotton';

interface MenuBarProps {
  onLogOf: () => void,
}

export const MenuBar = ( props: MenuBarProps ) => {

  return (
    <div className='bg-primary-500 rounded-lg py-3 px-2 absolute text-center items-center w-36'>
      <MenuButton tittle="Personal Information" />
      <MenuButton tittle="Ask for a Resume" />
      <MenuButton tittle="Your own Resumes" />
      <button onClick={() => {props.onLogOf(); window.location.reload();}}
        className="hover:text-primary-300 mt-2 font-semibold py-1 px-2 rounded-md text-primary-200 ">
        Log out
      </button>
    </div>
  );
};
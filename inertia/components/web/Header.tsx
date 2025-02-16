import { Link,usePage } from "@inertiajs/react";
import { RegUser } from '../../types';
import HeaderNotification from "./HeaderNotification"; 
import HeaderTopNav from "./HeaderTopNav";
import NavBar from "./NavBar";
interface MainMenuProps {
    className?: string;
}
  const Header = ({ className }: MainMenuProps) => {
     const { user } = usePage<{ user: RegUser[] }>().props;
    // console.log(user,'User Data Header');
    return (
        <header className="header-2">
            <HeaderNotification />
            <HeaderTopNav />
            <NavBar />
        </header>

    );
  };

  export default Header;

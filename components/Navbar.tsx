import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.svg";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white Py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" width={40} />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
            <AvatarFallback>BT</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/auth"}>LogOut</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;

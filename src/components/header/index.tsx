import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/Logo.png";
import Icons from "../icons";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0">
      <div className="bg-white-cs shadow-cs md:shadow-none py-5 px-4 flex justify-between md:bg-transparent md:py-3 md:px-0 md:border-b md:border-b-neutral-300 xl:py-5 container-cs">
        <div className="flex items-center gap-x-4">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <button className="h-8 w-8 flex items-center justify-center md:hidden">
                <Icons.Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>

            <DrawerContent className="bg-white top-0 w-[85%] mt-0 rounded-t-none pt-8 px-6">
              <DrawerHeader className="p-0">
                <DrawerTitle className="flex justify-between items-center pb-3 border-b border-b-neutral-200">
                  <Image src={Logo} height={32} width={114.91} alt="plantify logo" />
                  <DrawerClose asChild>
                    <button>
                      <Icons.Close />
                    </button>
                  </DrawerClose>
                </DrawerTitle>
              </DrawerHeader>

              <div className="flex flex-col gap-y-5 mt-6">
                <Link href={"/"} className="text-body-md font-medium text-neutral-900 py-1 px-2">
                  Home
                </Link>
                <Link href={"/about-us"} className="text-body-md font-medium text-neutral-900 py-1 px-2">
                  About Us
                </Link>
                <Link href={"/about-us"} className="text-body-md font-medium text-neutral-900 py-1 px-2">
                  Contact Us
                </Link>
                <Link href={"/about-us"} className="text-body-md font-medium text-neutral-900 py-1 px-2">
                  Blog
                </Link>
              </div>
            </DrawerContent>
          </Drawer>

          <Image
            src={Logo}
            height={37}
            width={122}
            alt="plantify logo"
            className="w-[88px] h-[27px] md:h-[26px] md:w-[86px] xl:h-[37px] xl:w-[122px]"
          />
        </div>

        <nav className="items-center gap-x-6 hidden md:flex xl:gap-x-10">
          <Link
            href={"/"}
            className="font-medium md:text-body-md xl:text-body-lg text-neutral-900 px-2 py-1 xl:px-3 xl:py-2"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="font-medium md:text-body-md xl:text-body-lg text-neutral-900 px-2 py-1 xl:px-3 xl:py-2"
          >
            Shop
          </Link>
          <Link
            href={"/"}
            className="font-medium md:text-body-md xl:text-body-lg text-neutral-900 px-2 py-1 xl:px-3 xl:py-2"
          >
            Blog
          </Link>
          <Link
            href={"/"}
            className="font-medium md:text-body-md xl:text-body-lg text-neutral-900 px-2 py-1 xl:px-3 xl:py-2"
          >
            Pages
          </Link>
        </nav>

        <div className="flex items-center gap-x-4 xl:gap-x-6">
          <button className="h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center">
            <Icons.Search />
          </button>
          <button className="h-8 w-8 xl:h-10 xl:w-10 items-center justify-center hidden md:flex">
            <Icons.Heart />
          </button>
          <button className="h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center">
            <Icons.ShoppingBag />
          </button>
          <button className="h-8 w-8 xl:h-10 xl:w-10 items-center justify-center hidden md:flex">
            <Icons.User />
          </button>
        </div>
      </div>
    </header>
  );
}

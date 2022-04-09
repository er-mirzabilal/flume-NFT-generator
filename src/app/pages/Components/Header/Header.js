import Logo from "../../../../assets/images/Logo.png";
import Vector from "../../../../assets/images/Vector.svg";

const Header = () => {
    return (
        <header class="text-gray-600 body-font shadow-lg md:px-5">
        <div class="container mx-auto flex flex-wrap p-5 sm:flex-row items-center">
          <a href="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <img src={Logo} />
          </a>
          <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Guide</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">
              <img src={Vector} />
            </a>
          </nav>
          <a href="/login"><button class="inline-flex items-center text-white bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-300 rounded text-base mt-4 sm:mt-0">
            Connect Wallet
          </button></a>
        </div>
      </header>
    );
}

export default Header;


import { Menu, Search, Grid, Timer } from "lucide-react";

const Header = () => {


  return (
    <header className="flex justify-between z-50 items-center p-3 bg-white shadow-md">
      {/* Left Side - Menu & Logo */}
      <div className="flex items-center space-x-2">
       
        <h1 className="text-xl font-bold text-green-700 flex items-center">
          <span className="text-2xl font-extrabold"></span> DoIt
        </h1>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Grid className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Timer className="w-5 h-5 text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;

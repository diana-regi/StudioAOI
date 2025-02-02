import React from 'react'


const Header = () => {
  const navItems = ['Home', 'Pages', 'Services', 'Team', 'Blog'];

  return (
    <header className="bg-white mb-5">
    <nav className="container mx-auto flex justify-between flow-root items-center py-4 px-6">
      <h1 className="text-2xl font-bold  text-gray-800 float-left">STUDIO.AOI</h1>
      <ul className="flex float-right space-x-8">
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Pages</li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Services</li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Team</li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Blog</li>
      </ul>
    </nav>
  </header>
  

    
  );
};

export default Header;
import React from "react";

interface HeaderProps {
  selectedOption: string;
}

const MainHeader: React.FC<HeaderProps> = ({ selectedOption }) => {
  return (
    <header className="bg-gray shadow-lg shadow-slate-500">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-serif tracking-tight text-gray-900">
          {selectedOption}
        </h1>
      </div>
    </header>
  );
};

export default MainHeader;

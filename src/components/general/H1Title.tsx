import React from "react";

type H1TitleProps = {
  title: string;
};

const H1Title: React.FC<H1TitleProps> = ({ title }) => {
  return <h1 className="text-2xl font-bold mb-4 text-gray-800">{title}</h1>;
};

export default H1Title;

import React, { useEffect, useState } from 'react';

import MarkDown from '../components/MarkDown';

const REACT_MD =
  'https://raw.githubusercontent.com/react-factory/react-factory/master/packages/react/README.md';
const ASYNC_MD =
  'https://raw.githubusercontent.com/react-factory/react-factory/master/packages/async/README.md';
const CORE_MD =
  'https://raw.githubusercontent.com/react-factory/react-factory/master/packages/core/README.md';

const BUTTON_CLASSES =
  'bg-purple-600 text-white p-1 rounded my-1 cursor-pointer hover:bg-purple-100 hover:text-purple-700 transition';
function getButtonClasses(selected: boolean): string {
  if (!selected) return BUTTON_CLASSES;
  return `bg-purple-100 text-purple-700 p-1 rounded my-1 cursor-pointer`;
}

export const Home: React.FC = () => {
  const [selected, setSelected] = useState('@react-factory/core');
  useEffect(() => {
    const el = document.getElementById(selected);
    if (el) {
      window.scroll({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  });
  return (
    <div className="h-full">
      <header className="border-black h-20 w-full p-1 flex align-center bg-purple-100 fixed shadow">
        <h6 className="text-purple-700 text-lg font-semibold my-auto p-4">
          react-factory
        </h6>
        <h6
          className="text-purple-500 text-lg font-semibold my-auto p-4"
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send?phone=5548991012435&text=hi!',
              '_blank'
            )
          }
        >
          redux mentoring?
        </h6>
      </header>
      <div className="flex flex-row pt-20">
        <div className="bg-purple-300 w-1/5 p-1">
          <div className="fixed">
            <div
              onClick={() => setSelected('@react-factory/core')}
              className={getButtonClasses(selected === '@react-factory/core')}
            >
              <h4>@react-factory/core</h4>
            </div>
            <div
              onClick={() => setSelected('@react-factory/react')}
              className={getButtonClasses(selected === '@react-factory/react')}
            >
              <h4>@react-factory/react</h4>
            </div>
            <div
              onClick={() => setSelected('@react-factory/async')}
              className={getButtonClasses(selected === '@react-factory/async')}
            >
              <h4>@react-factory/async</h4>
            </div>
          </div>
        </div>
        <div className="bg-purple-200 w-4/5 p-8">
          <div>
            <div id="@react-factory/core" className="bg-white p-4 rounded shadow my-1">
              <MarkDown url={CORE_MD} />
            </div>
            <div
              id="@react-factory/async"
              className="bg-white p-4 rounded shadow my-1"
            >
              <MarkDown url={ASYNC_MD} />
            </div>
            <div
              id="@react-factory/react"
              className="bg-white p-4 rounded shadow my-1"
            >
              <MarkDown url={REACT_MD} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

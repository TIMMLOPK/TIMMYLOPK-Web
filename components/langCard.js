import { Transition } from "@headlessui/react";
import { useState } from "react";

const Card = ({ icons, name, description }) => {
  const [showsescr, setshowDe] = useState(false);
  return (
    <div
      className="p-4 max-w-sm mx-auto rounded-full flex items-center space-x-4 min-h-full dark:text-white dark:hover:bg-wbg hover:opacity-75"
      onClick={() => setshowDe(!showsescr)}
    >
      <div className="text-sm font-medium text-gray-900 dark:text-white flex">
        <span className="flex items-center">{icons}</span>
        <span className="ml-2">{name}</span>
      </div>
      <Transition
        show={showsescr}
        as="p"
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <p className="text-slate-500 dark:text-gray-400 text-sm">
          {description}
        </p>
      </Transition>
    </div>
  );
};

export default Card;

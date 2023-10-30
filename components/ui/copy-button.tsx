"use client";

import { CheckIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const CopyButton: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "dabazofficial@gmail.com";

  const handleCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <p className='sr-only'>dabazofficial@gmail.com</p>
      <button
        onClick={handleCopy}
        className='rounded-xl bg-neutral-50 px-6 py-2.5 text-sm font-medium text-neutral-950 shadow-sm hover:bg-neutral-200 border border-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 transition-colors flex items-center '
      >
        {isCopied ? "Copied!" : "Copy my email"}
        {isCopied ? <CheckIcon className="h-6 w-auto ml-2" /> : <Square2StackIcon className="h-6 w-auto ml-2" />}
      </button>
    </div>
  );
};

export default CopyButton;

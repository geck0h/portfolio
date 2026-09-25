import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTrigger,
} from '@/components/ui/popover';

import { useEffect, useState } from 'react';

import { IoMail } from "react-icons/io5";

const CopyMailButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const copyMail = async () => {
    await navigator.clipboard.writeText('pvl.martin@proton.me');
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return
    
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  
    return () => clearTimeout(timer);
  }, [isOpen]);

  return(
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger render={<IoMail onClick={copyMail} className='transition-all ease h-10 w-10 focus:outline-none hover:scale-110 text-blue-400 hover:text-blue-600' />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent>
          <PopoverDescription>Email copied</PopoverDescription>
        </PopoverContent>
      </Popover>
    </>
  )
};

export default CopyMailButton;
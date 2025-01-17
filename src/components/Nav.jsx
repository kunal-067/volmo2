import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


function Nav() {
  return (
    <div className='flex justify-between items-center bg-green-900 py-5 px-8 sm:px-20 lg:px-32 w-full fixed z-50'>
      <img src="/valmologo.png" alt="valmologo" />
      <ul className='hidden md:flex items-center gap-x-4 lg:gap-x-10 font-[500] text-[16px] lg:text-[20px] text-white'>
        <a href='#' className='p-4'>Home </a>
        <a href='#' className='p-4'>Check Status </a>
        <a href='#' className='p-4'>About Us </a>
        <a href='#' className='p-4'>Contact Us</a>
      </ul>

      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger>
            <Menu className='text-white size-8' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Routes</SheetTitle>
              {/*<SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription> */}
              <div className='flex gap-4 text-[16px] py-6 font-medium flex-col items-start'>
                <a href='#'>Home </a>
                <a href='/login'>Check Status </a>
                <a href='#'>About Us </a>
                <a href='#'>Contact Us</a>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  )
}

export default Nav
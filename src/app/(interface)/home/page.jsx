import { Button } from '@/components/ui/button'
import Nav from '@/components/Nav'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Home() {
    return (
        <div className='md:pt-24'>
            <div className='p-5 md:p-12 pt-32 flex flex-col md:flex-row justify-between bg-gradient-to-r from-green-300 to-emerald-700'>
                <div className='text-white content-center'>
                    <p className='font-mono text-[28px] md:text-[36px] leading-8 md:leading-10 font-thin'>A trusted partner in simplifying logistics</p>

                    <Button className='mt-4 md:mt-8 ml-2 bg-green-900 px-8 font-semibold font-serif text-[14px]'>Join Us</Button>
                </div>
                <img src="/valmo-delivery.jpg" alt='Valmo Delivery' width={100} height={100} className='rounded-lg w-full mt-4 md:mt-0 md:w-[50%] h-auto' />
            </div>

            <div className='bg-green-900 p-4 sm:p-8 text-white'>
                <p className='text-center text-[24px] leading-6 md:leading-10 sm:text-[32px] mb-4'>We are a trusted partner in simplifying logistics</p>
                <p className='text-center mb-4 text-[14px] md:text-[18px]'>Our aim is to streamline the logistics process - offering a smooth and efficient delivery experience, all while delivering excellent value by offering the lowest cost.</p>

                <div className='flex flex-wrap md:px-12 justify-between py-4 gap-2'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div className='flex flex-col gap-4 px-4 sm:flex-row items-center justify-between py-12 md:px-28'>
                <img src='/valmo-delivery-to-customer.jpg' alt='valmo-delivery-to-customer' className=' rounded-lg w-full sm:w-[60%] shadow-xl' />

                <div className='shadow-md w-full sm:w-auto h-[100%] mx-4 md:mx-8 p-4 sm:p-8 pl-8 sm:pl-14 rounded-lg font-sans bg-slate-50'>
                    <h2 className=' text-center font-medium text-[18px] sm:text-[24px] mb-3'>Join us as delivery executive</h2>
                    <ul className=' list-disc flex flex-col text-[14px] sm:text-[16px] gap-2 leading-5'>
                        <li>Sign up to do both pick-up and delivery services across India.</li>
                        <li>It is a great opportunity to earn a sustainable income flexibly and provide our customers the best experience.</li>
                        <li>This program has enabled over 30,000+ partners across India till date.</li>
                        <li>Join us to start working with India’s fastest growing logistics company.</li>
                    </ul>
                    <Button className='p-4 px-6 mt-4 mx-auto'>Join Us</Button>
                </div>
            </div>

            <div className='flex flex-col gap-4 px-4 sm:flex-row items-center justify-between py-12 md:px-28'>

                <div className='shadow-md h-[100%] w-full sm:w-auto mx-4 md:mx-8 p-4 sm:p-8 pl-8 sm:pl-14 rounded-lg font-sans bg-slate-50'>
                    <h2 className=' text-center font-medium text-[18px] sm:text-[24px] mb-3'>Partner with us as a delivery partner</h2>
                    <ul className=' list-disc flex flex-col text-[14px] sm:text-[16px] gap-2 leading-5'>
                        <li>Valmo collaborates with regional players enabling them to handle logistics for any national e-commerce company.</li>
                        <li>Till date, we have enabled 3000+ small and large local regional logistics businesses to succeed.</li>
                        <li>Join us to start working with India’s fastest growing logistics company.</li>
                    </ul>
                    <Button className='p-4 px-6 mt-4 mx-auto'>Join Us Now</Button>
                </div>

                <img src='/valmo-delivery-group.jpg' alt='valmo-delivery-group' className=' rounded-lg w-full sm:w-[60%] shadow-xl' />
            </div>

        </div>
    )
}

function Card({ bold = '90 lac +', light = 'Orders shipped per day' }) {
    return (
        <div className=' bg-white rounded-md p-2 md:p-4 text-[12px] md:text-[16px] py-8 text-black align-middle flex flex-col items-center'>
            <strong className='text-[14px] md:text-[24px]'>
                {bold}
            </strong>
            <p>
                {light}
            </p>
        </div>
    )
}


export default Home
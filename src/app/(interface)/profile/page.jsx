'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [refundAmount, setRefundAmount] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [fType, setFtype] = useState('');
    const [status, setStatus] = useState('InActive')

    useEffect(()=>{
        axios.get('/api/user').then(res=>{
        }).catch(err=>{
            console.log(err)
        })
    })
    return (
        <div className='pt-28 flex justify-center'>
            <div className='max-w-[980px] w-full m-4'>
                <h2 className='text-[32px] md:text-[42px] font-medium'>Application No.: Hello.js</h2>
                <marquee className='py-3 text-green-900 font-mono text-[16px] md:text-[18px] font-semibold'>Welcome {'Kunal Shroff'} - view your application</marquee>
                

                <div className='bg-slate-50 font-sans opacity-80 text-[14px] md:text-[16px] overflow-x-scroll'>

                    <div className='flex p-4 bg-gray-200'>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Application No.</b>
                            <p className='w-1/2'>{id || 'Non..'}</p>
                        </div>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Document No.</b>
                            <p className='w-1/2'>{id || 'Non..'}</p>
                        </div>
                    </div>


                    <div className='flex p-4'>
                        <b className='w-1/2'>Application Details</b>      
                    </div>

                    <div className='flex p-4 bg-gray-200'>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Name</b>
                            <p className='w-1/2'>{name || 'Unknown'}</p>
                        </div>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Status</b>
                            <p className={`w-1/2 ${status=='Active'?'text-green-700':'text-red-700'}`}>{status || 'Inactive'}</p>
                        </div>
                    </div>

                    <div className='flex p-4'>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Email</b>
                            <p className='w-1/2'>{email || 'Not given'}</p>
                        </div>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Mobile</b>
                            <p className='w-1/2'>{phone || 'Not found'}</p>
                        </div>
                    </div>

                    <div className='flex p-4 bg-gray-200'>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Pin-code</b>
                            <p className='w-1/2'>{pinCode}</p>
                        </div>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>state</b>
                            <p className='w-1/2'>{state}</p>
                        </div>
                    </div>

                    <div className='flex p-4'>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Franchise Type</b>
                            <p className='w-1/2'>{fType}</p>
                        </div>
                        <div className='flex w-[50%]'>
                            <b className='w-1/2'>Refund Amount</b>
                            <p className='w-1/2'>{refundAmount || '0.00'}</p>
                        </div>
                    </div>

                    <div className='flex p-4 border-t-[1px] border-gray-500'> 
                      <b className='w-1/2'>Approved location: {address}</b>
                    </div>
                </div>

                <div className='flex p-2 px-4 rounded-sm m-2 my-4 bg-gray-600 text-white items-center justify-between'>
                    <b>Approval Letter</b>
                    <Button className='bg-green-900'>Download</Button>
                </div>
            </div>
        </div>
    )
}

export default page
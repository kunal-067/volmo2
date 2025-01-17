'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'


function Login() {
    const { toast } = useToast();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [submiting, setSubmiting] = useState(false)

    function submit() {
        if (!id || !password) {
            toast({
                title: 'Invalid attempt ! please fill the form correctly',
                variant: 'destructive'
            })
        }

        setSubmiting(true)
        axios.post('/api/login', { id, password }).then(res => {
            toast({
                title: res.data?.message
            })
            setSubmiting(false)
        }).catch(err => {
            console.log(err);
            toast({
                title: err.response?.message || err.message
            })
            setSubmiting(false)
        })
    }
    return (
        <div className='shadow-xl bg-white p-4 sm:p-10 rounded-xl w-[90%] sm:w-[498px] '>
            <div className='bg-green-900 max-w-fit rounded-xl p-2 text-3xl font-bold mb-4'>
                <img src='/valmologo.png' alt='valmologo' />
            </div>
            <p className='opacity-50 text-[14px] font-[400] text-center'>Welcome back !!</p>
            <h2 className='text-[46px] text-center font-bold mb-4'>Sign In</h2>

            <div className='flex flex-col w-full gap-4'>
                <div>
                    <Label>Id</Label>
                    <Input value={id} onChange={e => setId(e.target.value)} className='rounded-none mt-2 border-0 bg-green-100' placeholder='Enter your Id' />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input value={password} onChange={e => setPassword(e.target.value)} className='rounded-none mt-2 border-0 bg-green-100' placeholder='Enter your password' type='password' />
                </div>
            </div>

            <div className='flex flex-col w-full justify-center items-center gap-4 mt-10'>
                <Button onClick={submit} className={`${submiting ? 'bg-green-600 px-8' : 'bg-green-900'} rounded-full align-middle text-white font-medium`}>
                    {submiting ? '...' : <>Sign In <ArrowRight className='ml-4 mt-1 size-5 ' /></>}
                </Button>
            </div>
        </div>
    )
}

export default Login
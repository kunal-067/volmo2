'use client'
import {
    File,
    ListFilter,
    MoreHorizontal,
    PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import axios from "axios"


export default function Products() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('/api/applications').then(res=>{
            setData(res.data.data)
        }).catch(err=>{
            console.log(err);
            toast({
                title:'Please refreach page !',
                variant:'destructive'
            })
        })
    }, [])
    return (
        <>
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                        <TabsTrigger value="archived" className="sm:flex">
                            Archived
                        </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Active
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-7 gap-1">
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button>
                        <Button size="sm" className="h-7 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Product
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="all">
                    <ProductsContainer products={data} />
                </TabsContent>
            </Tabs>
        </>
    )
}




function ProductsContainer({ products }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                    Manage your User and view their sales performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {/* <TableHead className="w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead> */}
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="md:table-cell">
                                Pin Code
                            </TableHead>
                            <TableHead className="md:table-cell">City</TableHead>
                            <TableHead className="md:table-cell">State</TableHead>
                            <TableHead className="md:table-cell">Franchise Type</TableHead>
                            <TableHead>
                                <span >Actions</span>
                            </TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            (products && products.length > 0) ? (
                                products.map(product => (
                                    <ProductCard key={product._id} formId={product._id} city={product.city} state={product.state} name={product.name} email={product.email} phone={product.phone} fType={product.fType} pinCode={product.pinCode} />
                                ))
                            ) : <TableRow><TableCell span='5'>No list</TableCell></TableRow>
                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}


const ProductCard = ({ formId, name, email, phone, fType,city,state, pinCode }) => {
    return (
        <TableRow>
            <TableCell className="font-medium">
                {name || "No name"}
            </TableCell>
            <TableCell>
                {/* <Badge variant="outline">Draft</Badge> */}
                {email || 'use@mail.co'}
            </TableCell>
            <TableCell>₹{phone}</TableCell>
            <TableCell className="md:table-cell">{pinCode}</TableCell>
            <TableCell className="md:table-cell">
                {city}
            </TableCell>
            {/* <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell> */}

            <TableCell>
                {state}
            </TableCell>
            <TableCell>
                {fType}
            </TableCell>
            <TableCell>
                <Create formId={formId} />
            </TableCell>
        </TableRow>
    )
}

const Create = ({formId}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [refundAmount, setRefundAmount] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [fType, setFtype] = useState('');
    const [status, setStatus] = useState('InActive');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');

    function submit(){
        if(!id||!name||!phone||!email||!refundAmount||!state||!address||!pinCode||!fType||!status||!district||!city||!password){
            return toast({
                title:'Invalid Submit! please fill form correctly',
                variant:'destructive'
            })
        }
        axios.post('/api/user', {formId,id,name,email,phone,refundAmount,pinCode,fType,state,district,city,password,status,address}).then(res=>{
            toast({
                title:res.data.message
            })
        }).catch(err=>{
            console.log(err);
            toast({
                title:err.response?.data?.message || err.message
            })
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                {/* Save */}
                <div className=" border-[1px] p-1 px-3 rounded-md hover:bg-gray-200 border-gray-400">Open</div>
            </DialogTrigger>
            <DialogContent className='max-h-full overflow-auto'>
                <DialogHeader>
                    <DialogTitle>Save User data !!</DialogTitle>
                </DialogHeader>
                {/* <div className=" p-2 rounded-sm border-[1px] md:max-h-[95%] overflow-auto"> */}
                    <Input value={name} onChange={e => setName(e.target.value)} className='my-0' placeholder='Enter user name' />
                    <Input value={email} type='email' onChange={e => setEmail(e.target.value)} className='my-0' placeholder='Enter user Email' />
                    <Input value={phone} type='phone' onChange={e => setPhone(e.target.value)} className='my-0' placeholder='Enter user Phone' />
                    <Textarea value={address} onChange={e => setAddress(e.target.value)} className='my-0' placeholder='Enter user Address' />

                    <Select onValueChange={e => setStatus(e)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Choose Status" className={`${status == 'Active' && 'placeholder-green-800'} ${status == 'InActive' && 'placeholder-red-800'}`} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Active" className='text-green-900'>Active</SelectItem>
                            <SelectItem value="InActive" className='text-red-800'>InActive</SelectItem>
                            {/* <SelectItem value="system">System</SelectItem> */}
                        </SelectContent>
                    </Select>

                    <Input value={city} onChange={e => setCity(e.target.value)} className='my-0' placeholder='Enter user City' />
                    <Input value={pinCode} onChange={e => setPinCode(e.target.value)} className='my-0' placeholder='Enter user pin-code' />
                    <Input value={district} onChange={e => setDistrict(e.target.value)} className='my-0' placeholder='Enter user District' />
                    <Input value={state} onChange={e => setState(e.target.value)} className='my-0' placeholder='Enter user State' />
                    <Input value={refundAmount} onChange={e => setRefundAmount(e.target.value)} className='my-0' placeholder='Enter Refund Amount' />
                    <Input value={fType} onChange={e => setFtype(e.target.value)} className='my-0' placeholder='Enter user Franchise Type' />

                    <Input value={id} onChange={e => setId(e.target.value)} className='my-0' placeholder='Create user id' />
                    <Input value={password} onChange={e => setPassword(e.target.value)} className='my-0' placeholder='Create password' />


                    <DialogClose onClick={submit} className="bg-green-900 text-white w-full p-2 rounded-md">
                        Save
                    </DialogClose>
                {/* </div> */}

            </DialogContent>
        </Dialog>

    )
}



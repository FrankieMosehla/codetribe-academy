import { BreadcrumbItem, Breadcrumbs, Button, Card, Input } from '@nextui-org/react'
import signinimage from '../../../assets/pictures/signinimage.png'
import useAuth from '../../../hooks/useAuth'
import Logo from '../../../assets/pictures/Rectangle 22.png'

export default function Signup() {
    const { sing_up, setEmail, setPassword, setUsername } = useAuth()
    return (
        <section className='py-5 px-10'>
            <div className='absolute ms-10'>
                <img src={Logo} alt="" className='h-[4rem] '/>
                <Breadcrumbs className='ms-10 mt-4 text-tiny'>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem><span className='text-[#ff9f1c]'>sign up</span></BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className='flex justify-between gap-20'>
                <div className='flex place-items-center ps-20'>
                    <div>
                        <div className='py-5'>
                            <p className='text-3xl py-1 font-semibold'>Sign up</p>
                            <p className='text-tiny w-[25rem] text-gray-400'>Create your account to access exclusive benefits, manage your bookings, and enjoy a personalized experience.</p>
                        </div>
                        <Card className='w-[30dvw] shadow-none h-[40dvh]'>
                            <Input type='text' onChange={e => setUsername(e.target.value)} variant='bordered' label="username"/>
                            <Input type='email' onChange={e => setEmail(e.target.value)} variant='bordered' label="email" className='my-3'/>
                            <Input type='password' onChange={e => setPassword(e.target.value)} variant='bordered' label="password"/>
                            <div className='flex justify-center py-3'>
                                <Button onClick={sing_up} className='bg-[#FF9F1C] text-white shadowed-btn px-[10rem]'>Sign up</Button>
                            </div>
                            <p className='text-center my-1 text-gray-400'>Already have an account? <span className='text-[#ff9f1c] font-bold'>Sign in</span></p>
                        </Card>
                    </div>
                </div>
                <div className='signup_section w-[50dvw] h-[95dvh] text-center place-content-center'>
                    <p className='text-3xl font-medium text-white mx-2'>Join us for an exceptional stay. Sign up for exclusive offers and personalized experiences.</p>
                </div>
            </div>
        </section>
    )
}
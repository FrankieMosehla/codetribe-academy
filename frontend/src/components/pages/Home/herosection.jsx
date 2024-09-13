import { Avatar, Button, DatePicker, Divider, Input } from "@nextui-org/react";
import flora_pic from '../../../assets/pictures/Ellipse 2.png';
import frankie_pic from '../../../assets/pictures/Ellipse 2-1.png'
import { RiStarFill } from '@remixicon/react';
import { useInView } from 'react-intersection-observer';

export default function Herosection() {
    const { ref, inView } = useInView();
    return (
        <section ref={ref}>
            <div className="w-full hero h-[85dvh] rounded-lg">
                <div className="flex justify-center place-items-center pt-[15%]">
                    <div className="">
                        <div className="flex justify-center gap-1 backdrop-blur-sm mx-[20rem] px-5 rounded-full py-1 border">
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ffffff"} fill={"none"}>
                                    <path d="M20.7739 18C21.5232 18 22.1192 17.5285 22.6543 16.8691C23.7498 15.5194 21.9512 14.4408 21.2652 13.9126C20.5679 13.3756 19.7893 13.0714 18.9999 13M17.9999 11C19.3806 11 20.4999 9.88071 20.4999 8.5C20.4999 7.11929 19.3806 6 17.9999 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3.2259 18C2.47659 18 1.88061 17.5285 1.34548 16.8691C0.250028 15.5194 2.04861 14.4408 2.73458 13.9126C3.43191 13.3756 4.21052 13.0714 4.99994 13M5.49994 11C4.11923 11 2.99994 9.88071 2.99994 8.5C2.99994 7.11929 4.11923 6 5.49994 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8.08368 15.1112C7.0619 15.743 4.38286 17.0331 6.01458 18.6474C6.81166 19.436 7.6994 20 8.8155 20H15.1843C16.3004 20 17.1881 19.436 17.9852 18.6474C19.6169 17.0331 16.9379 15.743 15.9161 15.1112C13.52 13.6296 10.4797 13.6296 8.08368 15.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.4999 7.5C15.4999 9.433 13.9329 11 11.9999 11C10.0669 11 8.49988 9.433 8.49988 7.5C8.49988 5.567 10.0669 4 11.9999 4C13.9329 4 15.4999 5.567 15.4999 7.5Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <p className="text-white font-bold">
                                Mi casa es su casa
                            </p>
                        </div>
                        <div className="text-5xl text-white">
                            <p className="px-5 text-center">Welcome to your Home Away <br /> from Home</p>
                            <div className="flex justify-center py-3">
                                <Button className="bg-[#FF9F1C] rounded-full px-[55pt] text-white ">Book Now</Button>
                            </div>
                        </div>
                        <div className={`w-[20rem] backdrop-blur-md p-3 text-white rounded-md absolute top-0 mt-[7rem] ms-[43rem] border text-tiny ${inView ? `animate__animated animate__fadeIn ` : ""}`}>
                            Experience the warmth and comfort of home, with personalized service and a welcoming atmosphere that feels like family.
                        </div>
                        <div className="absolute left-0 ms-[5rem]">
                            <div className={`flex gap-1 backdrop-blur-sm bg-white/20 w-[13rem] py-2 px-4 rounded-md border ${inView ? `animate__animated animate__fadeIn animate__slow` : ""}`}>
                                <Avatar src={flora_pic} />
                                <div>
                                    <p className="text-white">Flora Smith</p>
                                    <div className="flex gap-1">
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className={`flex gap-1 backdrop-blur-sm bg-white/20 w-[13rem] py-2 px-4 rounded-md border mt-2  ${inView ? `animate__animated animate__fadeIn animate__slower` : ""}`} >
                                <Avatar src={frankie_pic} />
                                <div>
                                    <p className="text-white">Frankie Mosehla</p>
                                    <div className="flex gap-1">
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-yellow-400" size={15} />
                                        <RiStarFill className="text-gray-400" size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center absolute pt-[5rem] ">
                                <div className="the-container p-5  flex justify-between gap-10 ms-[5dvw] w-[80dvw] rounded-md">
                                    <div>
                                        <div className="flex gap-1">
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#FF9F1C"} fill={"none"}>
                                                    <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 8H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Check In</p>
                                            </div>
                                        </div>
                                        <div>
                                            <DatePicker className="max-w-[284px] text-white " variant="bordered" />
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-20 bg-gray-100">

                                    </div>
                                    <div>
                                        <div className="flex gap-1">
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#FF9F1C"} fill={"none"}>
                                                    <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 8H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Check Out</p>
                                            </div>
                                        </div>
                                        <div>
                                            <DatePicker className="max-w-[284px] text-white " variant="bordered" />
                                        </div>
                                    </div>

                                    <div className="w-[2px] h-20 bg-gray-100">

                                    </div>

                                    <div>
                                        <div className="flex gap-1">
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#FF9F1C"} fill={"none"}>
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Number of People</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Input type="text" />
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-20 bg-gray-100">

                                    </div>
                                    <div>
                                        <Button className="bg-[#FF9F1C] text-white py-[20pt] px-[50pt] mt-4 shadowed-btn">Book Now</Button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
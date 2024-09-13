import { Button, Image } from "@nextui-org/react";
import services_image from "../../../assets/pictures/reception.jpg"

export default function Services() {
    return (
        <section>
            <div>
                <div className="text-center">
                    <p className="text-tiny text-center text-[#FF9F1C]">Services</p>
                    <p className="text-4xl">Our Commitment to <span className="text-[#ff9f1c]">Excellence</span></p>
                    <p className="text-tiny text-gray-400 px-[12rem]">At Palm House, we strive to provide every guest with an unmatched experience of luxury, comfort, and personalized service, ensuring every detail is perfect from the moment you arrive.</p>
                </div>
                <div className="flex justify-around my-[50px]">
                    <div>
                        <div className="flex gap-1 w-[40dvw] mt-8">
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ff9f1c"} fill={"none"}>
                                    <path d="M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Luxurious Comfort</p>
                                <p className="text-tiny text-gray-400">We offer carefully designed spaces to relax and unwind, ensuring an unforgettable stay.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-[40dvw] my-4">
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ff9f1c"} fill={"none"}>
                                    <path d="M2 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 8.5L22 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 8.5L6 10.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 15.5H6M22 15.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Attention to Detail</p>
                                <p className="text-tiny text-gray-400">From room amenities to dining experiences, we focus on the smallest details to exceed your expectations.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-[40dvw] mb-4">
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ff9f1c"} fill={"none"}>
                                    <path d="M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Sustainability and Responsibility</p>
                                <p className="text-tiny text-gray-400">We are dedicated to environmentally friendly practices and community support, ensuring that your stay not only feels good but does good as well.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-[40dvw]">
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ff9f1c"} fill={"none"}>
                                    <path d="M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Exceptional Service</p>
                                <p className="text-tiny text-gray-400">Our dedicated staff is here to make sure every need is met with warmth and professionalism.</p>
                            </div>
                        </div>
                        <div className="ps-6 py-5">
                            <Button className="bg-[#ff9f1c] shadowed-btn text-white flex rounded-full px-[20pt]">
                                <p>Read more</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ffffff"} fill={"none"}>
                                        <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Image src={services_image} className="h-[50dvh]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
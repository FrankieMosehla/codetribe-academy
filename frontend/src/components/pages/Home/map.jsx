import { Image } from "@nextui-org/react";
import map from '../../../assets/pictures/map.png'

export default function Map() {
    return (
        <section>
            <div>
                <div className="text-center">
                    <div className="my-3">
                        <p className="text-3xl font-semibold my-1">Our Location</p>
                        <p className="text-gray-400 text-tiny">We’re conveniently located in the heart of the city. Use the map below to find us and explore nearby attractions and amenities.</p>
                    </div>
                    <div className="flex justify-center">
                        <Image src={map} className="h-[50dvh] object-cover" />
                        <div className="absolute z-10 mt-[6rem]">
                            <div className="bg-[#FF9F1C] px-5 py-1 rounded-md text-white text-tiny shadowed-btn">
                                We are here
                            </div>
                            <div className="flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#FF9F1C"} fill={"none"}>
                                    <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
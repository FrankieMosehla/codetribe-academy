import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import imageone from "../../../assets/pictures/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpg";
import imagetwo from "../../../assets/pictures/Modern Hotel Room Interior.jpg";
import imagethree from "../../../assets/pictures/download.jpg";
import imagefour from "../../../assets/pictures/Warm Elegance_ A Modern Bedroom with Mid-Century Touches.jpg"
import { RiStarFill } from "@remixicon/react"

export default function Cards() {

    const card_rooms = [
        {
            image: imageone,
            price: "R500/night"
        },
        {
            image: imagetwo,
            price: "R500/night"
        },
        {
            image: imagethree,
            price: "R500/night"
        },
        {
            image: imagefour,
            price: "R500/night"
        },
       
    ]

    return (
        <section className="mt-[15dvh]">
            <div className="text-center">
                <p className="text-3xl ">Explore Our <span className="text-[#FF9F1C]">Exclusive</span> Rooms</p>
                <p className="text-gray-400 text-tiny px-[20rem]">Discover a range of luxurious accommodations designed to offer you comfort and style. Choose from our curated selection of rooms and suites to find the perfect stay for your needs.</p>
            </div>
            <div className="grid grid-cols-12 my-10 gap-5">
                {card_rooms.map((room, i) => (
                    <Card isFooterBlurred className="w-full h-[45dvh] col-span-3 shadow-none border rounded-md" key={i}>
                        <CardHeader className="absolute z-10 flex justify-between">
                            <p className=" uppercase font-bold bg-white flex px-1 rounded-full gap-1">
                                <div className="mt-1">
                                    <RiStarFill size={13} className="text-yellow-400" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    4.5
                                </div>

                            </p>
                            <div className="bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#9ca3af"} fill={"none"}>
                                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-[40dvh] scale-125 -translate-y-6 "
                            src={room.image}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                R500/night
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full">Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </section>
    )
}
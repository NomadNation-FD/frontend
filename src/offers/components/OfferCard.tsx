import { Offer } from "@/offers/model/offer";
import { Carousel } from "@/public/components/Carousel";
import { Card } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const options = { loop: true };

export function OfferCard({ offer }: { offer: Offer }) {
    const [autoplayEnabled, setAutoplayEnabled] = useState(false);
    const plugins = useRef(Autoplay({ delay: 1800, playOnInit: false }));

    useEffect(() => {
        autoplayEnabled ? plugins.current.play() : plugins.current.stop();
    }, [autoplayEnabled]);

    const handleMouseEnter = () => { setAutoplayEnabled(true); }

    const handleMouseLeave = () => { setAutoplayEnabled(false); }

    return (
        <Link to={`/offers/${offer.id}`} className="w-fit h-fit">
            <Card
                className="shadow-md font-roboto transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg w-fit"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                raised
            >
                <div className="flex flex-col h-full md:aspect-square md:h-80 xl:h-100">
                    <Carousel
                        className="flex rounded-t-sm flex-1"
                        options={options}
                        plugins={[plugins.current]}
                        img={offer.images} />
                    <div className="flex h-1/4 md:h-2/5 flex-col justify-evenly">
                        <p className="font-extrabold px-4">{offer.destination}</p>
                        <p className="font-medium px-4 text-gray-600">{offer.description}</p>
                        <p className="font-bold px-4 ">Desde S/{offer.price}</p>
                    </div>
                </div>
            </Card >
        </Link >
    );
}
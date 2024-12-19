import { Card } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "@/public/components/Carousel";
import { Offer } from "@/offers/model/offer";
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
        <Link to={`/offers/${offer.id}`}>
            <Card.Root
                className="h-[430px] gap-3 shadow-md font-roboto transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Card.Header className="w-full p-0">
                    <Carousel className="flex justify-center items-center rounded-[5px] h-[285px]" options={options} plugins={[plugins.current]} img={offer.images} />
                </Card.Header >
                <Card.Title className="font-extrabold px-4">
                    {offer.destination}
                </Card.Title>
                <Card.Description className="font-medium px-4">
                    {offer.description}
                </Card.Description>
                <div className="mt-auto">
                    <Card.Footer className="font-bold px-4">
                        Desde S/{offer.price}
                    </Card.Footer>
                </div>
            </Card.Root >
        </Link>
    );
}
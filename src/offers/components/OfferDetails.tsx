import { Carousel } from "@/public/components/Carousel";
import { Card } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Offer } from "../model/offer";
import { OfferApi } from "../services/offer-api";
import { ReviewList } from "@/reviews/components/ReviewList";
import { ReviewContextProvider } from "@/reviews/contexts/ReviewContextProvider";

const api = new OfferApi();

export function OfferDetails() {
    const { offerId } = useParams();
    const [offer, setOffer] = useState<Offer>();
    const options = { loop: true };

    useEffect(() => {
        api.getOfferById(offerId as string).then((res) => {
            setOffer(res.data);
        });
    }, []);

    return (
        <>
            {
                offer &&
                <Card.Root flexDirection="row" className="w-2/3 mx-auto my-10 gap-2">
                    <Carousel options={options} img={offer.images} className="w-2/3 rounded-[5px]" />
                    <div className="flex flex-col w-max p-4 justify-center gap-10" >
                        <Card.Title className="text-5xl">
                            {offer.destination}
                        </Card.Title>
                        <Card.Description className="text-lg">
                            {offer.description}
                        </Card.Description>
                        <Card.Footer className="font-bold px-0 text-m">
                            Desde S/{offer.price}
                        </Card.Footer>
                    </div>
                </Card.Root >
            }
            <ReviewContextProvider>
                <ReviewList />
            </ReviewContextProvider>
        </>
    );
}

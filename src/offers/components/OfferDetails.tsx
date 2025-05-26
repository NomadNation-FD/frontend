import { Carousel } from "@/public/components/Carousel";
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
                <>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-9/10 xl:w-6/10 mx-auto my-10">
                        <Carousel options={options} img={offer.images} className="rounded-xs md:w-1/2 xl:w-6/10" />
                        <div className="flex flex-col gap-5 font-montserrat md:flex-1">
                            <h2 className="font-semibold text-5xl">{offer.destination}</h2>
                            <p className="font-normal text-2xl">{offer.description}</p>
                            <p className="font-semibold text-2xl">Desde S/{offer.price}</p>
                        </div>
                    </div>
                    <ReviewContextProvider>
                        <ReviewList />
                    </ReviewContextProvider>
                </>
            }
        </>
    );
}
import { useState, useEffect } from "react";
import { Offer } from "../model/offer";
import { OfferApi } from "../services/offer-api";
import { OfferCard } from "./OfferCard";

const api = new OfferApi();

export function OfferList() {
    const [offers, setOffers] = useState<Offer[]>([]);

    useEffect(() => {
        api.getOffers().then((offers) => {
            const data = offers.data;
            setOffers(data);
        });
    }, []);

    return (
        <div className="px-4 md:p-0 flex flex-col gap-10 mt-10">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold w-8/10 mx-auto md:w-full">Conoce nuestras ofertas</h2>
            <div className="w-fit mx-auto grid grid-cols-1 gap-y-12 gap-x-15 lg:gap-x-5 2xl:gap-x-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {
                    offers.length > 0 &&
                    offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
                }
            </div>
        </div>
    )
}
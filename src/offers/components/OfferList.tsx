import { useState, useEffect } from "react";
import { Offer } from "../model/offer";
import { OfferApi } from "../services/offer-api";
import { OfferCard } from "./OfferCard";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton"

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
        <div className="px-40 py-10">
            <div className="text-center mb-12 font-montserrat">
                <h2 className="text-3xl font-semibold">Conoce nuestras ofertas</h2>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {
                    offers.length ?
                        offers.map((offer) =>
                            <OfferCard key={offer.id} offer={offer} />
                        ) :
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="flex flex-col h-[430px]">
                                <Skeleton height="285px" />
                                <SkeletonText noOfLines={6} />
                            </div>
                        ))

                }
            </div>
        </div>
    )

}
import { OfferList } from "@/offers/components/OfferList";
import { HomeCarousel } from "../components/HomeCarousel";

export function Home() {
    return (
        <>
            <HomeCarousel />
            <OfferList />
        </>
    );
}

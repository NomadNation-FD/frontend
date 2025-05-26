import { Carousel } from "./Carousel";

import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import hero4 from '@/assets/hero4.jpg';
import Autoplay from "embla-carousel-autoplay";

const images = [hero1, hero2, hero3, hero4];

const options = { loop: true };

const plugins = [Autoplay({ delay: 4500 })]

export function HomeCarousel() {
    return (
        <div className="bg-blue px-2 lg:px-15 xl:px-30 pt-5 pb-14 ">
            <Carousel img={images} className="rounded-lg " options={options} plugins={plugins} />
        </div>
    )
}

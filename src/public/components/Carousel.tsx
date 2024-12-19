import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

type CarouselProps = {
    img: string[];
    className?: string;
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
}

export function Carousel({ img, className, options = {}, plugins = [] }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    useEffect(() => {
    }, [emblaApi])

    return (
        <div className={'overflow-hidden ' + className} ref={emblaRef}>
            <div className="flex">
                {
                    img.map((img, index) =>
                        <img key={index} src={img} alt={'Image ' + (index + 1).toString()} className="flex-none w-full object-cover" />)
                }
            </div>
        </div>
    )
}

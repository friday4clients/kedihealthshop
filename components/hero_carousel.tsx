"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { ProductType } from "@/lib/utils";
import { getProductsByCategory } from "@/lib/actions";
import categories from "@/lib/categories";
import Product from "./product";

const HeroCarousel = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        (async () => {
            const category = categories[(Math.floor(Math.random() * categories?.length))];
            const products = (await getProductsByCategory(category?.category))?.Items as ProductType[];
            setProducts(products);
        })();
    }, []);

    return (

        <Swiper
            className="!h-fit !w-[70%] !px-12 !rounded-xl"
            effect={'cards'}
            grabCursor={true}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true
            }}
            cardsEffect={{
                rotate: false,
                perSlideOffset: 25
            }}
            modules={[EffectCards, Autoplay]}
        >
            {products?.map(p => {
                return (
                    <SwiperSlide key={p.product_id} className="rounded-xl !bg-blue-800 !border-blue-800 !border-4">
                        <Product info={p} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


export default HeroCarousel;
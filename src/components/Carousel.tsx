"use client"
import React, { useCallback, useState, useEffect } from "react";
import { Anime_Interface } from "@/@types/Enime";
import Image from "next/image";
import Link from "next/link";
import { Carousel as CarouselBody} from "react-responsive-carousel";
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import play_button from "@/assets/images/play_button_2.svg"


type CarouselBody_Interface = {
    topAnime: Anime_Interface[];
}

type CarouselItem_Interface = {
    id: number;
    bannerImage: string;
    title: string;
    description: string;
    anime_id: string;
}





function CarouselItem({id, bannerImage, title, description, anime_id}: CarouselItem_Interface) {
    const [cleanText, setCleanText] = useState("")
    const strip = useCallback(
        (html:string) => {
        
            var tmp = document.implementation.createHTMLDocument("New").body;
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
         },
      [],
    )

    useEffect(() => {
        setCleanText(strip(description))
    }, [description, strip])
    
    return (
        <div id={`slide${id}`} className={styles.carouselBody}>
            <div className={styles.carouselImageContainer}>
            <Image className={styles.carouselImage} src={bannerImage} alt={title} width={1600} height={800}/>
            </div><section className={styles.carouselInfoSection}>
                <p className={styles.carouselSpotlight}>#{id + 1} Spotlight</p>
                <h2 className={styles.animeTitle}>{title}</h2>
                <p className={styles.carouselAnimeDesc}>{cleanText}</p>
                <Link className={styles.watchButton} href={`/watch/${encodeURIComponent(anime_id)}`}>
                    <Image src={play_button} alt="" width={15} height={15}/>
                    <p>Watch Now</p>
                </Link>
            </section>
        </div>
    )
}



function Carousel({topAnime}: CarouselBody_Interface) {
    return (
        <CarouselBody
            autoPlay 
            showThumbs={false}
            infiniteLoop
            dynamicHeight
            stopOnHover={false}
        >
            {
                topAnime.map((anime: Anime_Interface, index: number) => (
                    <CarouselItem 
                        key={index}
                        id={index}
                        bannerImage={anime.bannerImage}
                        title={anime.title.english || anime.title.romaji}
                        description={anime.description}
                        anime_id={anime.slug}
                    />
                ))
            }
        </CarouselBody>
    )
}

export default Carousel;
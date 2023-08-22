"use client";

import { EpisodeInfo_Interface, EpisodeSources_Interface } from "@/@types/AnimeType";
import { Anime_Interface, Episode } from "@/@types/Enime";
import React, { useState, useEffect } from "react";
import useAnime from "@/hooks/useAnime";
import Hls from "hls.js";
import loading from "@/assets/images/loader.svg";
import play_button from "@/assets/images/play_button.svg";
import Artplayer from "@/components/ArtPlayer";

import styles from "./AnimePlayer.module.css";

type AnimePlayer_Interface = {
  episodeInfo: Episode;
  animeInfo: Anime_Interface;
};

const AnimePlayer = ({ episodeInfo, animeInfo }: AnimePlayer_Interface) => {

  // console.log(episodeInfo, animeInfo);
  
  const [episode_sources, setEpisode_sources] =
    useState<EpisodeInfo_Interface | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const { getEpisode } = useAnime();


  const fetchEpisode = async () => {
    if(!episodeInfo) return;
    const source = episodeInfo.sources[0].target;
    const data = await getEpisode(source);
    setEpisode_sources(data);
    
    data.sources && data.sources.map((source: EpisodeSources_Interface) => {
        if(source.quality === "720p") {
            setUrl(source.url);
        }
    })
  }
  

  const configs = {
    container: ".artplayer-app",
    url: url,
    customType: {
        m3u8: function (video: any, url: any) {
            let hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
            if(!video.src) {
                video.src = url;
            }
        }
    },
    title: animeInfo.title,
    poster: episodeInfo?.image ?? "",
    volume: 1.0,
    isLive: false,
    muted: false,
    autoplay: true,
    autoOrientation: true,
    pip: true,
    autoSize: false,
    autoMini: false,
    screenshot: true,
    setting: true,
    loop: false,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: false,
    subtitleOffset: false,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    theme: "#ed9e5a",
    whitelist: ["*"],
    moreVideoAttr: {
      crossOrigin: "anonymous",
    },
    quality: episode_sources?.sources ? episode_sources.sources.map((source: EpisodeSources_Interface) => ({
        default: source.quality === "720p",
        html: source.quality,
        url: source.url,
    })) : [],
    thumbnails: {
        url: typeof episode_sources?.subtitles !== "undefined" ? episode_sources?.subtitles.find((sub) => "English")?.url : "",
        type: "vtt",
        style: {
            color: "#fff",
        },
        encoding: "utf-8",
    },
    icons: {
        loading: `<img height="100" width="100" src="${loading.src}" />`,
        state: `<img height="100" width="100" style="opacity:1" src="${play_button.src}" />`,
    }
  }


  useEffect(() => {
        fetchEpisode();
  }, [])
  

  return episode_sources ? (<Artplayer className={styles.art_player} option={configs}/>):(<div className={styles.loading_screen} style={{backgroundImage:`url(${animeInfo.bannerImage})`}}></div>);
};

export default AnimePlayer;

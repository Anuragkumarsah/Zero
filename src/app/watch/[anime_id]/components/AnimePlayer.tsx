"use client";

import { EpisodeInfo_Interface, EpisodeSources_Interface } from "@/@types/AnimeType";
import { AnimeInfo, Episode } from "@/@types/AniList";
import React, { useState, useEffect, useCallback } from "react";
import useAnime from "@/hooks/useAnime";
import Hls from "hls.js";
import loading from "@/assets/images/rem-loader-image.gif";
import play_button from "@/assets/images/play_button.svg";
import Artplayer from "@/components/ArtPlayer";

import styles from "./AnimePlayer.module.css";
import { IEpisode, IEpisodeSources } from "@/@types/PinkishHue";

type AnimePlayer_Interface = {
  episodeInfo: IEpisode;
  cover_image?: string | null;
};

const AnimePlayer = ({ episodeInfo, cover_image = null }: AnimePlayer_Interface) => {

  // console.log(episodeInfo, animeInfo);
  
  const [episode_sources, setEpisode_sources] =
    useState<IEpisodeSources | null>(null);
  const [url, setUrl] = useState<string>('');
  const { getEpisode } = useAnime();
  
  const fetchEpisode = async () =>{
    if(!episodeInfo) return;
    
    const source = episodeInfo.id;
    // console.log(source);
    
    if(source === undefined) {
      console.log("Episode not found");

      return;
    };
    const data = await getEpisode(source);
    setEpisode_sources(data);
    
    data?.sources && setUrl(data.sources[0].url);
  }
  
  console.log(episode_sources?.subTitles.find((sub) => sub.lang === "English")?.url);
  
  
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
    title: episodeInfo.title ?? "",
    poster: episodeInfo? "" : "",
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
        default: source.quality === episode_sources.sources[0].quality,
        html: source.quality,
        url: source.url,
    })) : [],
    subtitle: {
        url: episode_sources?.subTitles.find((sub) => sub.lang === "English")?.url,
        type: "vtt",
        style: {
            color: "#ed9e5a",
        },
    },
    icons: {
        loading: `<img height="100" width="100" style="border-radius:50%;" src="${loading.src}" />`,
        state: `<img height="100" width="100" style="opacity:1" src="${play_button.src}" />`,
    }
  }


  useEffect(() => {
      fetchEpisode();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return episode_sources ? (<Artplayer className={styles.art_player} option={configs}/>):(<div className={styles.loading_screen} style={{backgroundImage:`url(${cover_image})`}}></div>);
};

export default AnimePlayer;

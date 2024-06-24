"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "../../../public/images/Hero Image.png";

const VideoComponent = () => {
  return (
    <div>
      <video
        width="500"
        height="500"
        preload="none"
        className={styles.image}
        loop
        muted
        autoPlay
        playsInline>
        <source type="video/mp4" src="/video/Hero Image.mp4" />
        <Image src={heroImage} alt="hero image" priority={true} className={styles.image}/>
      </video>
    </div>
  );
};

export default VideoComponent;

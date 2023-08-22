import React from 'react'

import styles from "./loading.module.css"
import Image from 'next/image'

import loading_image from "@/assets/images/loader.svg"

const loading = () => {
  return (
    <div className={styles.loading_container}>
        <Image src={loading_image} alt='Loading...' width={200} height={200} priority/>
    </div>
  )
}

export default loading
import React from 'react'
import Image from '../Helper/Image';
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
    function handleClick() {
        setModalPhoto(photo);
    }

    console.log(typeof(photo))
    
    return (
        <li className={styles.photo} onClick={handleClick}>
            {typeof(photo) === 'object' && <Image src={photo.src} alt={photo.title}/>}
            {typeof(photo) === 'object' && <span className={styles.visualizacao}>{photo.acessos}</span>}
        </li>
    )
}

export default FeedPhotosItem

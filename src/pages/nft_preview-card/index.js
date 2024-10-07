import React from 'react'
import styles from './style.module.css';
import deneme from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';
import { ReactComponent as Ethereum } from './images/icon-ethereum.svg';
import { ReactComponent as Clock } from './images/icon-clock.svg';
import { ReactComponent as View } from './images/icon-view.svg';
function NftCard() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.column}>
                    <div className={styles.img_container}>
                        <img src={deneme} alt='' className={styles.img} />
                        <div className={styles.img_icon}/>
                        <View className={styles.icon}/>
                    </div>
                    <div className={styles.title}>Equilibrium #3429</div>
                    <div className={styles.subtitle}>Our Equilibrium collection promotes balance and calm.</div>
                    <div className={styles.row}>
                        <div className={styles.row_eth}><Ethereum />&nbsp; 0.041ETH</div>
                        <div className={styles.row_clock}><Clock />&nbsp; 3 days left</div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.creator_row}>
                        <img className={styles.avatar} src={avatar} alt='' />
                        Creation of <span className={styles.creator_name}>&nbsp;Jules Wyvern</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NftCard
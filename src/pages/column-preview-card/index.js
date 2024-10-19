import React from 'react'
import styles from './style.module.css';
import { ReactComponent as Sedan } from './images/icon-sedans.svg';
import { ReactComponent as Suv } from './images/icon-suvs.svg';
import { ReactComponent as Luxury } from './images/icon-luxury.svg';
function ColumnPreview() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.sedan}>
                    <Sedan />
                    <h1 className={styles.title}>Sedans</h1>
                    <div className={styles.description}>
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip
                    </div>
                    <div className={[styles.button, styles.sedan_color].join(' ')}>Learn More</div>
                </div>
                <div className={styles.suv}>
                    <Suv />
                    <h1 className={styles.title}>Suvs</h1>
                    <div className={styles.description}>
                        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
                    </div>
                    <div className={[styles.button, styles.suv_color].join(' ')}>Learn More</div>
                </div>
                <div className={styles.luxury}>
                    <Luxury />
                    <h1 className={styles.title}>luxury</h1>
                    <div className={styles.description}>
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </div>
                    <div className={[styles.button, styles.luxury_color].join(' ')}>Learn More</div>
                </div>
            </div>
        </div>
    )
}

export default ColumnPreview;
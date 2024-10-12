import React from 'react';
import styles from './style.module.css';
import { ReactComponent as Cart } from './images/icon-cart.svg';
function ProductPreview() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.card_img}/>
                <div className={styles.card_content}>
                    <div className={styles.sub_title}>Perfume</div>
                    <div className={styles.title}>Gabrielle Essence Eau De Parfum</div>
                    <div className={styles.description}>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                    </div>
                    <div className={styles.price_row}>
                        <div className={styles.price}>$149.99</div>
                        <div className={styles.discount}>$169.99</div>
                    </div>
                    <div className={styles.cart_button}>
                        <Cart />&nbsp;
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview
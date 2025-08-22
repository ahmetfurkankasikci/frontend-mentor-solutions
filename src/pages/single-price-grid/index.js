import styles from './style.module.css';
/* eslint-disable jsx-a11y/anchor-is-valid */
function SinglePrice() {
    return (
        <div className={styles.body}>

            <div class={styles.pricing_card}>
                <div class={styles.card_top}>
                    <h1>Join our community</h1>
                    <p class={styles.guarantee}>30-day, hassle-free money back guarantee</p>
                    <p>
                        Gain access to our full library of tutorials along with expert code reviews.
                        Perfect for any developers who are serious about honing their skills.
                    </p>
                </div>

                <div class={styles.card_bottom}>
                    <div class={styles.bottom_left}>
                        <h2>Monthly Subscription</h2>
                        <div class={styles.price_container}>
                            <span class={styles.price}>$29</span>
                            <span class={styles.price_period}>per month</span>
                        </div>
                        <p class={styles.access_info}>Full access for less than $1 a day</p>
                        <a href="#" class={styles.signup_button}>Sign Up</a>
                    </div>

                    <div class={styles.bottom_right}>
                        <h2>Why Us</h2>
                        <ul>
                            <li>Tutorials by industry experts</li>
                            <li>Peer & expert code review</li>
                            <li>Coding exercises</li>
                            <li>Access to our GitHub repos</li>
                            <li>Community forum</li>
                            <li>Flashcard decks</li>
                            <li>New videos every week</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SinglePrice;

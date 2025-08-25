import styles from './style.module.css';
import { ReactComponent as Pattern } from './images/bg-pattern-card.svg';
import ProfileImage from './images/image-victor.jpg';
function ProfileCard() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.profile_card}>
                    <div className={styles.image_container}>
                        <Pattern className={styles.profile_pattern} />
                        <img src={ProfileImage} alt='' className={styles.image} />
                    </div>

                    <div className={styles.profile_container}>
                        <div className={styles.profile_name}>
                            Victor Crest <span className={styles.age}>26</span>
                        </div>
                        <div className={styles.location}>London</div>
                    </div>

                    <hr className={styles.horizontal_line} />

                    <div className={styles.info_container}>
                        <div>
                            <h3 className={styles.title}>80K</h3>
                            <div className={styles.subtitle}>Followers</div>
                        </div>
                        <div>
                            <h3 className={styles.title}>803K</h3>
                            <div className={styles.subtitle}>Likes</div>
                        </div>
                        <div>
                            <h3 className={styles.title}>1.4K</h3>
                            <div className={styles.subtitle}>Photos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileCard;

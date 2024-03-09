import Link from "next/link";
import Image from 'next/image';

import telegram from '_utils/imgs/socials/telegram.png'
import insta from '_utils/imgs/socials/insta.png'

import styles from './socialPopup.module.scss'

export { SocialPopup };

function SocialPopup() {
    return (
        <div className={styles.socialsPopup}>
            <span  className={styles.socialsPopup_text}>Follow us</span>
            <Link href={"google.com"}>
              <Image 
                src={telegram}
                alt="Telegram"
              />
            </Link>
            <Link href={"https://www.instagram.com/amici.bureau"}>
              <Image 
                src={insta}
                alt="Instagram"
              />
            </Link>
        </div>
    );
}

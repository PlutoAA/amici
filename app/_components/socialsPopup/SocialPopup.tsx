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
            <Link href={"https://t.me/amici_bureau"}>
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.0696 -0.00542184C23.7486 0.0179339 23.4335 0.0932465 23.1366 0.217578H23.1326C22.8476 0.330578 21.4926 0.900578 19.4326 1.76458L12.0506 4.87358C6.75363 7.10358 1.54663 9.29958 1.54663 9.29958L1.60863 9.27558C1.60863 9.27558 1.24963 9.39358 0.87463 9.65058C0.642958 9.798 0.443604 9.99089 0.28863 10.2176C0.10463 10.4876 -0.0433696 10.9006 0.0116304 11.3276C0.10163 12.0496 0.56963 12.4826 0.90563 12.7216C1.24563 12.9636 1.56963 13.0766 1.56963 13.0766H1.57763L6.46063 14.7216C6.67963 15.4246 7.94863 19.5966 8.25363 20.5576C8.43363 21.1316 8.60863 21.4906 8.82763 21.7646C8.93363 21.9046 9.05763 22.0216 9.20663 22.1156C9.28409 22.1606 9.36668 22.1962 9.45263 22.2216L9.40263 22.2096C9.41763 22.2136 9.42963 22.2256 9.44063 22.2296C9.48063 22.2406 9.50763 22.2446 9.55863 22.2526C10.3316 22.4866 10.9526 22.0066 10.9526 22.0066L10.9876 21.9786L13.8706 19.3536L18.7026 23.0606L18.8126 23.1076C19.8196 23.5496 20.8396 23.3036 21.3786 22.8696C21.9216 22.4326 22.1326 21.8736 22.1326 21.8736L22.1676 21.7836L25.9016 2.65458C26.0076 2.18258 26.0346 1.74058 25.9176 1.31158C25.797 0.877404 25.5184 0.503985 25.1366 0.264578C24.8161 0.069693 24.4443 -0.0243733 24.0696 -0.00542184ZM23.9686 2.04458C23.9646 2.10758 23.9766 2.10058 23.9486 2.22158V2.23258L20.2496 21.1626C20.2336 21.1896 20.2066 21.2486 20.1326 21.3076C20.0546 21.3696 19.9926 21.4086 19.6676 21.2796L13.7576 16.7486L10.1876 20.0026L10.9376 15.2126L20.5936 6.21258C20.9916 5.84258 20.8586 5.76458 20.8586 5.76458C20.8866 5.31058 20.2576 5.63158 20.2576 5.63158L8.08163 13.1746L8.07763 13.1546L2.24163 11.1896V11.1856L2.22663 11.1826C2.23686 11.1792 2.24688 11.1752 2.25663 11.1706L2.28863 11.1546L2.31963 11.1436C2.31963 11.1436 7.53063 8.94758 12.8276 6.71758C15.4796 5.60058 18.1516 4.47558 20.2066 3.60758C21.4254 3.09458 22.6454 2.58458 23.8666 2.07758C23.9486 2.04558 23.9096 2.04458 23.9686 2.04458Z"
                        fill="#010101"/>
                </svg>
            </Link>
        </div>
    );
}

import { Goldman } from 'next/font/google'
import localFont from 'next/font/local'
import 'globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
    title: 'Amici'
}

const goldman = Goldman({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-goldman',
    weight: '400'
})

const craftWork = localFont({
    src: [
      {
        path: './_utils/fonts/CRAFTWORKGROTESK-REGULAR.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './_utils/fonts/CRAFTWORKGROTESK-MEDIUM.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: './_utils/fonts/CRAFTWORKGROTESK-SEMIBOLD.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: './_utils/fonts/CRAFTWORKGROTESK-BOLD.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: './_utils/fonts/CRAFTWORKGROTESK-HEAVY.ttf',
        weight: '800',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--font-craftWork',
  })

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${goldman.variable} ${craftWork.variable}`}>
            <body>
                {children}
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                    limit={1}
                    theme="dark"
                />
            </body>
        </html>
    );
}

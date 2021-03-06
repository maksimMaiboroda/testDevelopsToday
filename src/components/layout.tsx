import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

const title = 'Front-End (React) test by DevelopsToday';
export const siteTitle = 'Front-End (React) test by DevelopsToday';

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <>
                    <img
                        src="/images/profile.png"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt="React-logo"
                    />
                    <h1 className={utilStyles.heading2Xl}>{title}</h1>
                </>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Layout;

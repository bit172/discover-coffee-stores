import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cls from 'classnames';
import COFFEE_STORES from '../../data/coffee-stores.json';
import { CoffeeStore } from '../../types';

import styles from '../../styles/coffee-store.module.css';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  return {
    props: {
      coffeeStore: COFFEE_STORES.find((coffeeStore) => {
        return coffeeStore.id.toString() === params?.id;
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  const paths = COFFEE_STORES.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

type CoffeeStoreProps = {
  coffeeStore: CoffeeStore;
};

const CoffeeStore: NextPage<CoffeeStoreProps> = ({ coffeeStore }) => {
  const router = useRouter();
  const handleUpvoteButton = () => {
    console.log('handle upvote');
  };
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, name, neighbourhood, imgUrl } = coffeeStore;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            className={styles.storeImg}
            src={imgUrl}
            width={600}
            height={360}
            alt={name}
          />
        </div>
        <div className={cls('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width="24"
              height="24"
              alt="address icon"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width="24"
              height="24"
              alt="neighbourhood icon"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="rating icon"
            />
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;

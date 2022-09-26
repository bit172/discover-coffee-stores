import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';

import styles from './card.module.css';

type CardProps = {
  name: string;
  imgUrl: string;
  href: string;
};

const Card = ({ name, imgUrl, href }: CardProps) => {
  return (
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imgUrl}
              width={260}
              height={160}
              alt="coffee card"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

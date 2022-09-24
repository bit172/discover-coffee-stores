import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <div>Coffee Store Page</div>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default CoffeeStore;

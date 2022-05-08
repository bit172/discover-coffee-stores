import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const { query } = useRouter();

  return (
    <div>
      {query.id}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;

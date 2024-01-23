import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head></Head>
      <div>
        <Link href={`/roulette`}>룰렛 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Home;

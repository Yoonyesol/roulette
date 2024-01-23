import Head from "next/head";
import Link from "next/link";
import style from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>timeqlife</title>
      </Head>
      <main className={style.main}>
        <Link href={`/roulette`}>룰렛 페이지로 이동</Link>
      </main>
    </div>
  );
};

export default Home;

import AdSense from "@/components/AdSense";
import Roulette from "../components/Roulette";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>심플 룰렛</title>
        <meta
          name="description"
          content="흥미로운 룰렛 게임을 간단히 플레이할 수 있는 사이트입니다. 결정이 필요한 다양한 상황에서 룰렛 당첨 결과를 유용하게 사용해 보세요!"
        />
        <meta
          name="keywords"
          content="룰렛, 네이버 룰렛, 게임, 온라인, 재미, 선택장애, 흥미, 당첨"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="룰렛 게임사" />
        <meta name="email" content="seaofiandme@google.com" />
        <meta property="og:type" content="website" />
        <meta
          name="naver-site-verification"
          content={process.env.NAVER_SEARCH_VERIFY_KEY}
        />
      </Head>
      <AdSense adSlot={process.env.AD_SLOT} />
      <Roulette />
    </div>
  );
};

export default Home;

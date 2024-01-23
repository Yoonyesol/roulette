import AdSense from "@/components/AdSense";
import RouletteData from "@/components/RouletteData";
import Head from "next/head";
import Explain from "@/components/Explain";

const Roulette = () => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="심플 룰렛" />
        <meta
          name="description"
          content="흥미로운 룰렛 게임을 간단히 플레이할 수 있는 사이트입니다. 결정이 필요한 다양한 상황에서 룰렛 결과를 유용하게 사용해 보세요!"
        />
        <meta property="og:url" content="https://timeqlife.com/roulette" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="룰렛 게임사" />
        <meta name="email" content="seaofiandme@google.com" />
      </Head>
      <AdSense adSlot={"8185832302"} />
      <RouletteData />
      <AdSense adSlot={"8185832302"} />
      <Explain />
    </div>
  );
};

export default Roulette;

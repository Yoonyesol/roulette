import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="timeqlife" />
        <meta
          name="description"
          content="온라인에서 사용할 수 있는 유용한 툴들을 제공하는 사이트입니다."
        />
        <meta property="og:url" content="https://timeqlife.com" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="룰렛 게임사" />
        <meta name="email" content="seaofiandme@google.com" />
        <meta
          name="naver-site-verification"
          content={process.env.NAVER_SEARCH_VERIFY_KEY}
        />
      </Head>
    </div>
  );
};

export default Home;

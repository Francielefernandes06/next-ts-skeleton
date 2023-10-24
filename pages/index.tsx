import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
          <title>Home page</title>
          <meta name="description" content="Home page content description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home page</h2>
      <Link href="/about">About Page</Link>
    </>
  );
}

export default Home;

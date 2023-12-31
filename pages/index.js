import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beta Bahia Fotografia</title>
        <meta name="description" content="by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Beta Bahia Fotografia"
        message='"Um instante de vida capturado para a eternidade"'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}

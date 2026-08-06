import Image from "next/image";
import BannerComponent from "./components/Common/home-components/BannerComponent";
import LatestComponent from "./components/Common/latest-components/LatestComponent";

export default function Home() {
  return (
    <>
      <BannerComponent/>
      <LatestComponent/>
    </>
  );
}

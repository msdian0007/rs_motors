import { Gallery, Hero, Navbar } from "@/components";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Gallery />
      </Suspense>
    </main>
  );
}

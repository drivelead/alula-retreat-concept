import Hero from "./components/hero";
import Names from "./components/names";
import Opportunity from "./components/opportunity";
import Section3 from "./components/section3";
import Section4 from "./components/section4";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
        <Opportunity />
        <Section3 />
        <Section4 />
        <Names />
      </div>
    </main>
  );
}

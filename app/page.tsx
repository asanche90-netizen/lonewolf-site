import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TheCode from "@/components/sections/TheCode";
import Arsenal from "@/components/sections/Arsenal";
import Kills from "@/components/sections/Kills";
import Form from "@/components/sections/Form";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <TheCode />
      </Reveal>
      <Reveal>
        <Arsenal />
      </Reveal>
      <Reveal>
        <Kills />
      </Reveal>
      <Reveal>
        <Form />
      </Reveal>
    </main>
  );
}

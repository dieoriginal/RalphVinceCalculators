import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";
export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <ExampleJsx />
          <div className="flex justify-center">
            <FloatingPanelComponent />
          </div>
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1>
      </h1>
     


    </article>
  );
};

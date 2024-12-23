import React from "react";
import {
  Header,
  Button,
  RowFirst,
  Image,
  RowSecond,
  FirstParagraph,
  RowTheerd,
  SecondParagraph,
  RowFourth,
  TextContainer,
  Footer,
} from "./styled-components";
import { Endtag, Container } from "../../styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import EndtagIcon from "../../Endtag.json";
import { useInView } from "@react-spring/web";

function About() {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "100% 0%", threshold: 0.5}
  );
  const [refSecond, springsSecond] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "100% 0%", threshold: 0.3 }
  );

  const [refThird, springsThird] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { rootMargin: "100% 0%", threshold: 0.3 }
  );
  return (
    <Container style={{ backgroundColor: "black", overflowx: "hidden", overflowy: "scroll" }}>
      <Endtag>
        <Lottie animationData={EndtagIcon} loop={false} />
      </Endtag>
      <Header>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/work">
          <Button>Work</Button>
        </Link>
      </Header>
      <RowFirst ref={ref} style={springs}>
        <Image>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dcnhluzt1/image/upload/v1734294119/profilna-min_kz1gkp.png"
          />
        </Image>
      </RowFirst>
      <TextContainer>
        <RowSecond ref={refSecond} style={springsSecond}>
          <FirstParagraph>
            <p>
              I help businesses and non-profits in creating a meaningful and
              impactful story in the form of integrated illustration, animation
              and sound design.
            </p>
          </FirstParagraph>
        </RowSecond>
        <RowTheerd ref={refThird} style={springsThird}>
          <SecondParagraph>
            <p>
              I love the quest for the golden thread - fabric that binds the
              emotional value of our message.
            </p>
            <p>
              Using shapes, color, sound and movement through multidisciplinary
              linear and latteral thinking to convey a meaningful story.
            </p>
          </SecondParagraph>
        </RowTheerd>
        <RowFourth>
          <p>Say Hello.</p>
        </RowFourth>
        <Footer>
          <p>bdashciric@gmail.com</p>
          <p>Copyright &#169; bdashciric 2022</p>
        </Footer>
      </TextContainer>
    </Container>
  );
}

export default About;

// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  intro: require("../assets/redux-talk.jpg"),
  goal: require("../assets/goal.jpg"),
  lego: require("../assets/lego.jpg"),
  pyramid: require("../assets/software-architecture-pyramid.png"),
};

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#61dafb",
  seconday: "#282c34",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgImage={images.intro.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux Talk
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.goal.replace("/", "")} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="primary">Goal!</Heading>
          <Text size={2} textColor="primary">Find ways in which we can improve software architecture at Calvium</Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lego.replace("/", "")} bgDarken={0.75} bgColor="primary">
          {/* <Heading size={1} textColor="primary">Software Architecture</Heading> */}
          <BlockQuote fit>
            <Quote textSize="48">Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution.</Quote>
            <Cite>[IEEE 1471]</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>What are the attributes of good software architecture?</Heading>
          <List>
            <Appear><ListItem>Functional</ListItem></Appear>
            <Appear><ListItem>Robust</ListItem></Appear>
            <Appear><ListItem>Maintainability</ListItem></Appear>
            <Appear><ListItem>Reusability</ListItem></Appear>
            <Appear><ListItem>Extensibility</ListItem></Appear>
            <Appear><ListItem>Scalability</ListItem></Appear>
            <Appear><ListItem>Testability</ListItem></Appear>
            <Appear><ListItem>Availability</ListItem></Appear>
            <Appear><ListItem>Performant</ListItem></Appear>
            <Appear><ListItem>Secure</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} textColor="primary" bgColor="secondary">
          <Heading size={1} textColor="primary">3 Rs of Software Architecture</Heading>
          <List>
            <Appear><ListItem>Readability</ListItem></Appear>
            <Appear><ListItem>Reusability</ListItem></Appear>
            <Appear><ListItem>Refactorability</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.pyramid.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Presentational and Container Components</Heading>
        </Slide>        

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Presentional Components</Heading>
          <List>
            <Appear><ListItem>Are concerned with <i>how things look</i></ListItem></Appear>
            <Appear><ListItem>Often allow containment via <i>this.props.children</i></ListItem></Appear>
            <Appear><ListItem>No dependencies on the rest of the App eg Redux</ListItem></Appear>
            <Appear><ListItem>Don't specify how the data is loaded or mutated</ListItem></Appear>
            <Appear><ListItem>Rarely have their own state (maybe for UI rather than data)</ListItem></Appear>
            <Appear><ListItem>Are written as Functional components unless they need state, lifecycle hooks or performance optimisations</ListItem></Appear>
            <Appear><ListItem>Examples: Page, Sidebar, List, Button</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Container Components</Heading>
          <List>
            <Appear><ListItem>Are concerned with <i>how things work</i></ListItem></Appear>
            <Appear><ListItem>May contain both presentational and container components</ListItem></Appear>
            <Appear><ListItem>Never have styles except wrapping divs</ListItem></Appear>
            <Appear><ListItem>Redux uses them as callbacks to the presentational components</ListItem></Appear>
            <Appear><ListItem>Often stateful as they tend to serve as data sources</ListItem></Appear>
            <Appear><ListItem>Uusally generated using higher order components such as connect in Redux</ListItem></Appear>
            <Appear><ListItem>Examples: UserPage, RefinementsSidebar, BlogPostList</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Pros</Heading>
          <List>
            <Appear><ListItem>Better separation of concerns.  You understand your app and your UI better.</ListItem></Appear>
            <Appear><ListItem>Better reusability.  You can resuse a presentational component with different datasources, and turn those into separate container components that can be further reused</ListItem></Appear>
            <Appear><ListItem>Presentational components are essentially your apps palette</ListItem></Appear>
            <Appear><ListItem>Forces you to extract 'layout components' eg Sidebard, Page and use this.props.children instead of duplicating the same markup in serveral container components</ListItem></Appear>
            <Appear><ListItem>Easy to test pure functions</ListItem></Appear>
            <Appear><ListItem>Bloated Components and Poor Data Structures are easily spotted</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Cons</Heading>
          <List>
            <Appear><ListItem>Conversion hassle.</ListItem></Appear>
            <Appear><ListItem>Messy diffs</ListItem></Appear>
            <Appear><ListItem>Inconsistency class vs function</ListItem></Appear>
            <Appear><ListItem>Classes are familiar to OO developers</ListItem></Appear>
            <Appear><ListItem>No performance Benefits</ListItem></Appear>
            <Appear><ListItem>Yet another decision</ListItem></Appear>
          </List>
        </Slide> 

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Application Structure</Heading>
        </Slide>          

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">File Type Structure</Heading>
        </Slide>       

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Feature / Route Structure</Heading>
        </Slide>   

        <Slide transition={["fade"]} bgImage={images.lego.replace("/", "")} bgDarken={0.75} bgColor="primary">
          <Heading size={1} textColor="primary">HOCs</Heading>
          <BlockQuote fit>
            <Quote textSize="48">A higher order component is a function that takes a component and returns a new component.  <br/><br/> Used to share common functionality between components without repeating code.</Quote>
            <Cite>React Docs</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}

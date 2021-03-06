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
  fileStruct: require("../assets/file-struct.png"),
  blogStruct: require("../assets/blog-struct.png"),
  shopStruct: require("../assets/shop-struct.png"),
  pure: require("../assets/pure.png"),
  container: require("../assets/container.png"),
};

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#61dafb",
  seconday: "#282c34",
  tertiary: "#03A9FC",
  quaternary: "#CECECE",
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

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Discussion Topics</Heading>
          <List>
            <Appear><ListItem>Software Architecture</ListItem></Appear>
            <Appear><ListItem>Presentational and Container Components</ListItem></Appear>
            <Appear><ListItem>Project Structure</ListItem></Appear>
          </List>
        </Slide>
        {/* 
          - Redux is a big topic
          - Lots to talk about eg FP
          - Made a prototype for an uber enterprise level architecture
          - I've architected a couple of commercial projects from scratch an would like to share a couple of patterns that I expect you are already familiar with
          - Decided to keep it simple and keep to three basic topics
          - Format
            - Introduction
            - Examples
            - Pros and Cons
            - Group Discussion
        */}

        <Slide transition={["fade"]} bgImage={images.goal.replace("/", "")} bgDarken={0.75} bgColor="secondary">
          <Heading size={1} textColor="primary">Goal!</Heading>
          <Text size={2} textColor="primary">Find ways in which we can improve software architecture at Calvium</Text>
        </Slide>
        {/* 
          - React and Redux are libs not frameworks (unopinionated) so you free to strucutre them as you please
          - Important to understand the problem, possible solutions and trade offs
          - Current architecture is pragmatic often done under tight deadlines
          - Hopefully we will have time to discuss your ideas
        */}

        <Slide transition={["fade"]} bgImage={images.lego.replace("/", "")} bgDarken={0.75} bgColor="primary">
          <BlockQuote fit>
            <Quote textSize="48">Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution.</Quote>
            <Cite>[IEEE 1471]</Cite>
          </BlockQuote>
        </Slide>
        {/* 
          - Important to understand the problem and possible solutions 
          - Current architecture is pragmatic often done under tight deadlines
          - Important to make the right decisions at the start of the project as changes are difficult to make after it starts
        */}

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
            <Appear><ListItem>Secure</ListItem></Appear>
            <Appear><ListItem>Easy onboarding</ListItem></Appear>
          </List>
        </Slide>
        {/* 
          - 'ilties'
          - Functional - does it meet the business requirements?
          - Robust - is it reliable?
          - Maintainability - can you make changes easily?
          - Extensibility - can you easily add new features?
          - Scalability - can it handle increase work loads?
          - Testability - is it easily tested?
          - Availability - does it have high availability? eg PWA
          - Secure - does it provide quality assurance eg confidentially and integrity?
          - Easy onboarding - low entry barrier for new developers?
        */}

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Gropu Feedback</Heading>
          <List>
            <Appear><ListItem>Maintainability</ListItem></Appear>
            <Appear><ListItem>Modular</ListItem></Appear>
            <Appear><ListItem>KISS</ListItem></Appear>
            <Appear><ListItem>Consistency</ListItem></Appear>
            <Appear><ListItem>Readability</ListItem></Appear>
            <Appear><ListItem>Consistency</ListItem></Appear>
            <Appear><ListItem>Scalebility</ListItem></Appear>
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
        {/* 
          - 3 more 'ilties'
        */}

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.pyramid.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>
        {/* 
          - Obligatory talk graph
          - Readability - are things easy to find and understand
          - Reusability - DRY
          - Rectorability - true modules
        */}        

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Presentational and Container Components</Heading>
        </Slide>        

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Presentional Components</Heading>
          <List>
            <Appear><ListItem>Are concerned with <i>how things look</i></ListItem></Appear>
            <Appear><ListItem>Functional / Pure components</ListItem></Appear>
            <Appear><ListItem>No dependencies, eg Redux</ListItem></Appear>
            <Appear><ListItem>Often allow containment via <i>this.props.children</i></ListItem></Appear>
            <Appear><ListItem>Don't specify how the data is loaded or mutated</ListItem></Appear>
            <Appear><ListItem>Rarely have their own state (maybe for UI)</ListItem></Appear>
            <Appear><ListItem>Examples: Page, Sidebar, List, Button</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" height="100%">
          <Image src={images.pure.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>      

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Container Components</Heading>
          <List>
            <Appear><ListItem>Are concerned with <i>how things work</i></ListItem></Appear>
            <Appear><ListItem>May contain both presentational and container components</ListItem></Appear>
            <Appear><ListItem>Never have styles except wrapping divs</ListItem></Appear>
            <Appear><ListItem>Redux uses them as callbacks to the presentational components</ListItem></Appear>
            <Appear><ListItem>Often stateful as they tend to serve as data sources</ListItem></Appear>
            {/* Can be stateless as well eg inject state via props */}
            <Appear><ListItem>Usually generated using higher order components such as connect in Redux</ListItem></Appear>
            <Appear><ListItem>Examples: UserPage, RefinementsSidebar, PostList</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.container.replace("/", "")} height="100%"/>
        </Slide>    

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Pros</Heading>
          <List>
            <Appear><ListItem>Better separation of concerns. </ListItem></Appear> 
            {/* You understand your app and your UI better. */}
            <Appear><ListItem>Better reusability.  </ListItem></Appear>
            {/* You can resuse a presentational component with different datasources, and turn those into separate container components that can be further reused */}
            <Appear><ListItem>Presentational components are essentially your apps palette</ListItem></Appear>
            {/* Presentational components are the view layer, Containter components are controllers */}
            <Appear><ListItem>Forces you to extract 'layout components' eg Sidebard, Page </ListItem></Appear>
            {/* and use this.props.children instead of duplicating the same markup in serveral container components */}
            <Appear><ListItem>Easy to test pure functions</ListItem></Appear>
            {/* Deterministic functions without side effects are easy to test */}
            <Appear><ListItem>Less Bloat and code smells</ListItem></Appear>
            {/* Bloated Components and Poor Data Structures (eg too many props) are easily spotted */}
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Cons</Heading>
          <List>
            <Appear><ListItem>Conversion hassle.</ListItem></Appear>
            {/* eg If the component requires a lifecyle method you have to add a class */}
            <Appear><ListItem>Messy diffs</ListItem></Appear>
            {/* eg Adding a class makes it look like you made more changes than you have */}
            <Appear><ListItem>Inconsistency class vs function</ListItem></Appear>
            {/* Context switching between classes and functions might be confusing for some developers */}
            <Appear><ListItem>Classes are familiar to OO developers</ListItem></Appear>
            {/* Many developers are unfamiliar with FP  */}
            <Appear><ListItem>Functional Components do not implement ShouldComponentUpdate</ListItem></Appear>
            {/* and render everytime. PureComponent */}
            <Appear><ListItem>Yet another decision</ListItem></Appear>
            {/* Another decision to make */}
          </List>
        </Slide> 
        {/* PureComponents solve performance and issues above */}

        {/* <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Gropu Feedback</Heading>
          <List>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
          </List>
        </Slide>  
         */}

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Application Structure</Heading>
        </Slide>          

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="primary">Standard Type Structure</Heading>
        </Slide>       

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.fileStruct.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>       
        {/* 
          Standard structure
          Example of an app with two features - blog and shop
          Divided by type / nature of each file
         */}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Pros</Heading>
          <List>
            <Appear><ListItem>Developer convience</ListItem></Appear>
            <Appear><ListItem>Familiarity</ListItem></Appear>
            <Appear><ListItem>KISS</ListItem></Appear>
          </List>
        </Slide>         

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Cons</Heading>
          <List>
            <Appear><ListItem>Scalability</ListItem></Appear>
            <Appear><ListItem>Scattered files</ListItem></Appear>
            <Appear><ListItem>Difficult to extract modules</ListItem></Appear>
          </List>
        </Slide>     
        {/* Scatterd files - across code base when working on the same thing */}

        {/* <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Feedback</Heading>
          <List>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
            <Appear><ListItem>Foo</ListItem></Appear>
          </List>
        </Slide>     */}


        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Feature Structure</Heading>
        </Slide>
        {/* AKA by route or domain  */}

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.blogStruct.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>         

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.shopStruct.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>    
        {/* 
          - Document Driven Development
          - Model..
          - Public API for module
          - Test for a module
        */}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Pros</Heading>
          <List>
            <Appear><ListItem>Reusability</ListItem></Appear>
            <Appear><ListItem>Readibility</ListItem></Appear>
            <Appear><ListItem>Disoverability</ListItem></Appear>
            <Appear><ListItem>Scalability</ListItem></Appear>
            <Appear><ListItem>Maintainability</ListItem></Appear>
          </List>
        </Slide>         
        {/* 
          - Resuability - eg drop data module into a React Native app
          - Readibility - less noise
          - Discoverability - everything is in one place not scattered
          - Scalability 
            - add as many features as you like compared to bloated standard structure
            - possible micro services
          - Maintainability - less conflicts if a true module
        */}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Cons</Heading>
          <List>
            <Appear><ListItem>YAGNI - You aren't gonna need it</ListItem></Appear>
            <Appear><ListItem>More boilerplate</ListItem></Appear>
            <Appear><ListItem>Gold plating</ListItem></Appear>
            <Appear><ListItem>Developer convience</ListItem></Appear>
          </List>
        </Slide>   
        {/* 
          - YAGNI 
            - principle of extreme programming
            - do the simplest thing that is going to work
          - More boilerplate - eg more files to create
          - Dev convience - more files to jump around
        */}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Further Discussion</Heading>
          <List>
            <Appear><ListItem>State - containers or redux eg API calls</ListItem></Appear>
            <Appear><ListItem>Business Logic - containers, thunks or actions, reducers and selectors?</ListItem></Appear>
            <Appear><ListItem>Reuse - HOCs, render props &amp; hooks</ListItem></Appear>
          </List>
        </Slide>

        {/* <Slide transition={["fade"]} bgImage={images.lego.replace("/", "")} bgDarken={0.75} bgColor="primary">
          <Heading size={1} textColor="primary">HOCs</Heading>
          <BlockQuote fit>
            <Quote textSize="48">A higher order component is a function that takes a component and returns a new component.  <br/><br/> Used to share common functionality between components without repeating code.</Quote>
            <Cite>React Docs</Cite>
          </BlockQuote>
        </Slide> */}

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Other News</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">React Hooks</Heading>
          <List>
            <Appear><ListItem>Announced on Oct 25 2018</ListItem></Appear>
            <Appear><ListItem>No more classes</ListItem></Appear>
            <Appear><ListItem>Pure function hooks eg useState, useEffect</ListItem></Appear>
          </List>          
        </Slide>

      </Deck>
    );
  }
}

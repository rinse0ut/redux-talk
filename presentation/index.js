// Import React
import React from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);

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
  intro: require("../assets/typescript-generics.png"),
  variance: require("../assets/variance.png"),
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

const code = `
// Type of x is inferred as number
let x = 3
// Error: Type <string> is not assignable to type 'number'
x = 'foobar'
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1600} contentHeight={1000}>

        {/*<Slide transition={["zoom"]} bgImage={images.intro.replace("/", "")}>*/}
        {/*</Slide>*/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>TypeScript Generics</Heading>
          <List>
            <Appear><ListItem>A powerful tool for building reusable components</ListItem></Appear>
            <Appear><ListItem>Allows you to dynamically define <i>`type variables`</i> </ListItem></Appear>
            <Appear><ListItem>Better alternative to the <i>`any`</i> data type</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Pros</Heading>
          <List>
            <Appear><ListItem>Type Abstraction</ListItem></Appear>
            <Appear><ListItem>Type Safety</ListItem></Appear>
            <Appear><ListItem>IDE code completion</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Cons</Heading>
          <List>
            <Appear><ListItem>Advanced Topic</ListItem></Appear>
            <Appear><ListItem>Syntax can be confusing</ListItem></Appear>
            <Appear><ListItem>Complexity with HOCs and Redux</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Type Variables</Heading>
          <List>
            <Appear><ListItem>Conventional naming: T, U, V</ListItem></Appear>
            <Appear><ListItem>Custom naming: ItemT, ItemType, FooThing</ListItem></Appear>
            <Appear><ListItem>Defined in angle brackets: &lt;T&gt;</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Type Inference</Heading>
          <List>
            <ListItem>TypeScript can <i>implicitly</i> infer and then check the type of a variable</ListItem>
          </List>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`// Type of x is inferred as number
let x = 3

// ERROR: x is not a number!
x = 'foobar'`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Type Assertion</Heading>
          <List>
            <ListItem>TypeScript allows you to <i>explicitly</i> set variable types</ListItem>
            <ListItem>A compile time construct therefore not called `type casting`</ListItem>
          </List>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`let foo: any
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`// preferred JSX syntax
let bar = foo as string
            `}
          </SyntaxHighlighter>
        </Slide>

        {/*<Slide transition={["fade"]} bgColor="secondary" textColor="primary">*/}
          {/*<Heading size={6} textColor="primary" caps>As const</Heading>*/}
          {/*<List>*/}
            {/*<Appear><ListItem>Makes variables immutable</ListItem></Appear>*/}
            {/*<Appear><ListItem>Useful fix for unknown types</ListItem></Appear>*/}
            {/*<Appear><ListItem>Literal types do not get widened eg "hello" to `string`</ListItem></Appear>*/}
            {/*<Appear><ListItem>Object literal properties become `readonly`</ListItem></Appear>*/}
            {/*<Appear><ListItem>Arrays become `readonly`</ListItem></Appear>*/}
          {/*</List>*/}
        {/*</Slide>*/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Identity Function</Heading>
          <List>
            <ListItem>A function that always returns the same value that was used as it's argument</ListItem>
          </List>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`function identity(arg: number): number {
  return arg
}

// type of output is number
let output = identity(42)

// ERROR: arg is not a number!
let output = identity('foobar')`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Any Type</Heading>
          <List>
            <ListItem>Allows you to opt out of type checking</ListItem>
          </List>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`function identity(arg: any): any{
  return arg
}

// type of output is any
let output = identity(42)

// type of output is any
let output = identity('foobar')`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Hello Generics</Heading>
          <List>
            <ListItem>&lt;T&gt; is the type variable definition</ListItem>
            <ListItem>Function argument is of type T</ListItem>
            <ListItem>Return value is also of type T</ListItem>
          </List>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`function identity<T>(arg: T): T {
  return arg
}

let output = identity(42) // T is inferred as number

let output = identity('foobar') // T is inferred as string`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Heading size={6} textColor="primary" caps>Setting Function Type Variables</Heading>
        <List>
          <ListItem>Explicitly set type of T</ListItem>
          <ListItem>Useful in complex scenarios</ListItem>
        </List>
        <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
          {`function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>('foobar') // set T to string

let output = identity<string>(23) // ERROR: not a string!
`}
        </SyntaxHighlighter>
      </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Generic Class</Heading>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`/** A class definition with a generic variable */
class Queue<T> {
  private data = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

/** Again sample usage */
const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // ERROR : T is a string not a number!
`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>React Components</Heading>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`/** React Component with generic variables */
class Component<P, S> {
  constructor(props: Readonly<P>);
  state: Readonly<S>;
  // src code...
}`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`/** Extended React Component with generic variable settings */
type PropTypes = {foo: string, bar: number}
type StateType = {data: []}

class Screen extends React.Component<PropTypes, StateType> {
  // userland code...
}
`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Queue Component</Heading>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`/** QueueUI Component with a generic variable ItemT */
type PropsType<ItemT> = {
  items: ItemT[]
}

class QueueUI<ItemT> extends Component<PropsType<ItemT>> {
  render() {
    return (
      <ul>
        {/* item is of type ItemT */}
        {this.props.items.map(item => <li>{item}</li>)}
      </ul>
    )
  }
}

/** Usage - Setting ItemT as number */
<QueueUI<number> items={[0, 1, 2, 3]} />
`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Subclass Example</Heading>
          <SyntaxHighlighter language="javascript" style={docco} customStyle={{textAlign:'left', margin: 0}}>
            {`/** QueueUI Component with a generic subclass variable ItemT */
type TitleT = { title: string }

type PropsType<ItemT> = { items: ItemT[] }

class QueueUI<ItemT extends TitleT> extends Component<PropsType<ItemT>> {
  render() {
    return (
      <ul>
        {/* item is of type ItemT extends TitleT */}
        {this.props.items.map(item => <li>{item.title}</li>)}
      </ul>
    )
  }
}

/** Usage - Setting ItemT as QueueItem */
type QueueItem = { title: string }

<QueueUI<QueueItem> items={[
  {title: 'foo'},
  {title: 'bar'},
  {title: 'baz'},
]}/>
`}
          </SyntaxHighlighter>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Covariance and contravariance</Heading>
          <List>
            <ListItem>Occasionally causes issues when using subtypes</ListItem>
            <ListItem>Further reading:</ListItem>
            <ListItem>https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance</ListItem>
          </List>
          <Image src={images.variance.replace("/", "")} margin="0px auto 40px" height="100%"/>
        </Slide>

      </Deck>
    );
  }
}

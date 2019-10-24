import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, {ThemeProvider, keyframes} from "styled-components";

// keyframes component that can be given to other components
const rotateBox = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// create a component and pass in css properties inside back tics
// you can pass props into the component and assign their values in the back tics as well
// pass in the rotateBox component as an option for css properties
const Box = styled.div`
  width: 100vw;
  height: 50px;
  background-color: ${props => props.color};
  animation: ${rotateBox} 1s linear infinite;
`;

// styled component
const Header = styled.h1`
  font-size: 24px;
`;
// styled component that acts as an extension to the header component
const RedHeader = styled(Header)`
  color: red;
`;

// You can also set properties in the parent that will affect the child
// this component also uses a pseudo selector
const RedBgChild = styled.div`
  padding: 16px;
  background-color: Red;

  &:hover {
    background-color: pink;
  }
`;
const Parent = styled.div`
  padding: 16px;
  background-color: blue;
  ${RedBgChild} {
    background-color: yellow;
  }
`;

const ThemeChild = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.bg};
`;

// theme that can be passed into a component with a theme provider
const theme = {
  bg: "aqua"
}




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>

        {/* styled component that uses a prop */}
        <Box color="blue" />

        <Header>Header component</Header>
        {/* Extension of the header copmonent */}
        <RedHeader>Extended Header Component</RedHeader>

        {/* Non over written components */}
        <Parent />
        <RedBgChild />

        {/* Parent component that over-writes the child components red background color */}
        <Parent>
          <RedBgChild />
        </Parent >

        <ThemeProvider theme={theme} >
          {/* Component that takes the theme passed into the theme provider */}
          <ThemeChild />
        </ThemeProvider>


        
      </div>
    );
  }
}

export default App;

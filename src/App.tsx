import * as React from "react";
import { hot } from "react-hot-loader/root";

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>My First Initium Frontend Application</h1>
      </>
    );
  }
}

export default hot(App);

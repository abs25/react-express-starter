import * as React from "react";
import * as ReactDOM from "react-dom";

export const App: React.FC<{}> = (props) => {
  return <>Hello World!</>;
};

ReactDOM.render(<App />, document.getElementById("app"));

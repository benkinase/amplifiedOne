import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App content'>
      <Navbar />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

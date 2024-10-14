import {useState } from "react";
import "./App.css";
import CreateForm from "./Form";
import DisplayData from "./Display";
import {DataProvider} from "./Context";

function App() {

  const formData = useState({ userName: "", email: "", bio: "" });

  return (
    <>
      {/* We want to create the main component in this jsx file, this includes
    the background and header elements */}

  {/* DataProvider is used instad of DataContext to provide the update function aswell */}
      <DataProvider value={formData}>
        <div>
        <h1>User Profile Manager</h1>
        <CreateForm />
        <DisplayData />
        </div>
      </DataProvider>
      
    </>
  );
}

export default App;

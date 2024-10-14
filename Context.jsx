import {useState,createContext} from "react";
import PropTypes from "prop-types";

//set up the data in the context
export const DataContext = createContext({userName:'',email:'',bio:''});

// this part is for the form
// it lets the form update the data in the context 
export const DataProvider = ({children}) => {
    //this 'info' name is important and used in the display file
    const [info,setInfo] = useState({userName:'',email:'',bio:''});

    //changes previous values of the info state to new values
    const updateInfo = (newData) => {
        setInfo((prevValues) => ({
            ...prevValues,
            ...newData
        }));
    };

    return (
   
    <DataContext.Provider value={{info,updateInfo}}>
        {children}
    </DataContext.Provider>

);
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired 
};

//this is for the app and display files
//so that they can access the data in the context
//does NOT allow them to update the data in the context
export default DataContext
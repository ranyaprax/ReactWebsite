import {useContext} from 'react'
import {DataContext} from './Context'
import "./App.css";

{/* We want this file to display the data entered in our form file */}

function DisplayData(){
    //use the DataContext export of our context file
    //this is so we can access the data in there
    const {info} = useContext(DataContext) // 'info' needs to be the name in the dataprovider state

    return (
        <div className='display'>
            <h3>Current Profile:</h3>
                <p className='details'>{`Name: ${info.userName}`}</p>
                <p className='details'>{`Email: ${info.email}`}</p>
                <p className='details'>{`Bio: ${info.bio}`}</p>
        </div>
    )
}

export default DisplayData


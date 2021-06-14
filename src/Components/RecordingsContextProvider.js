import React, {createContext, useState} from 'react';

export const RecordingContext = createContext()

function RecordingsContextProvider(props) {

    const [recordings, setRecordings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get weights from API
    const search = () => {
        console.log("Searching for weights...")
        const apiUrl = `http://localhost:8080/recordings/`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((results) => {
                setRecordings(results);
                setLoading(false)
                console.log(results)
            });
    }

    return (
        <RecordingContext.Provider value={{ recordings, loading, search}}>
            {props.children}
        </RecordingContext.Provider>
    );
}

export default RecordingsContextProvider;
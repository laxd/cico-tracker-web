import React, {createContext, useState} from 'react';
import {formatDate} from "../utils/Date";

export const RecordingContext = createContext()

function RecordingsContextProvider(props) {

    const URL_BASE = "http://localhost:8080"

    const [recordings, setRecordings] = useState({});
    const [loading, setLoading] = useState(true);

    // Get weights from API
    const search = (startDate) => {
        const to = new Date(startDate)
        to.setDate(startDate.getDate() + 7)

        console.log(`Searching for recordings between ${startDate} and ${to}...`)
        const apiUrl = `${URL_BASE}/recordings/between?from=${formatDate(startDate)}&to=${formatDate(to)}`;
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
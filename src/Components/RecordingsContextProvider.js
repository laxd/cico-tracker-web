import React, {createContext, useState} from 'react';
import {formatDate} from "../utils/Date";
import {CicoApi} from "../utils/CicoApi"

export const RecordingContext = createContext()

function RecordingsContextProvider(props) {
    const URL_BASE = "http://localhost:8080"

    const API = new CicoApi({baseUrl: URL_BASE})

    const [recordings, setRecordings] = useState({});
    const [loading, setLoading] = useState(true);

    // Get weights from API
    const search = (range) => {
        API.getRecordingsBetween(range.from, range.to)
            .then((recordings) => {
                console.log(recordings)
                setRecordings(recordings)
                setLoading(false)
            })
    }

    return (
        <RecordingContext.Provider value={{ recordings, loading, search}}>
            {props.children}
        </RecordingContext.Provider>
    );
}

export default RecordingsContextProvider;
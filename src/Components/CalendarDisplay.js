import React, {useContext, useEffect} from 'react';
import {RecordingContext} from "./RecordingsContextProvider";
import CalendarWeek from "./CalendarWeek";
import Loading from "./Loading";

function CalendarDisplay(props) {

    const { recordings, loading, search } = useContext(RecordingContext)

    useEffect(() => {
        // TODO: Use range
        console.log("CalendarDisplay searching...")
        search();
        console.log("DONE")
    }, [props.range]);


    // TODO: Change to calendar display
    return (
        <div>
            {loading ? <Loading /> : <CalendarWeek recordings={recordings} /> }
        </div>
    );
}

export default CalendarDisplay;
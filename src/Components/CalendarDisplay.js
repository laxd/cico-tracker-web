import React, {useContext, useEffect, useState} from 'react';
import {RecordingContext} from "./RecordingsContextProvider";
import CalendarWeek from "./CalendarWeek";
import Loading from "./Loading";
import DateRangeSelect from "./DateRangeSelect";

function getMonday() {
    const prevMonday = new Date();
    prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));

    return prevMonday
}

function CalendarDisplay(props) {

    const { recordings, loading, search } = useContext(RecordingContext)

    const [startDate, setStartDate] = useState(getMonday())

    useEffect(() => {
        // TODO: Use range
        console.log("CalendarDisplay searching...")
        search(startDate);
        console.log("DONE")
    }, [startDate]);

    const addDays = (offset) => {
        const newDate = new Date(startDate)
        newDate.setDate(startDate.getDate() + offset)
        setStartDate(newDate)
    }

    // TODO: Change to calendar display
    return (
        <div>
            {loading ? <Loading /> : <CalendarWeek recordings={recordings} startDate={startDate} /> }
            <DateRangeSelect startDate={startDate} addDays={addDays}/>
        </div>
    );
}

export default CalendarDisplay;
import React, {useContext, useEffect, useState} from 'react';
import {RecordingContext} from "./RecordingsContextProvider";
import CalendarWeek from "./CalendarWeek";
import Loading from "./Loading";
import DateRangeSelect from "./DateRangeSelect";
import CalendarStatistics from "./CalendarStatistics";

function getMonday() {
    const prevMonday = new Date();
    prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));

    return prevMonday
}

function CalendarDisplay(props) {

    const { recordings, loading, search } = useContext(RecordingContext)

    const [startDate, setStartDate] = useState(getMonday())

    useEffect(() => {
        search(startDate);
    }, [startDate]);

    const addDays = (offset) => {
        const newDate = new Date(startDate)
        newDate.setDate(startDate.getDate() + offset)
        setStartDate(newDate)
    }

    if(loading) {
        return <Loading/>
    }

    return (
        <div>
            <CalendarWeek recordings={recordings} startDate={startDate} />
            <DateRangeSelect startDate={startDate} addDays={addDays}/>
            <CalendarStatistics recordings={recordings}/>
        </div>
    );
}

export default CalendarDisplay;
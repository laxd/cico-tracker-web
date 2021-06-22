import React, {useContext, useEffect, useState} from 'react';
import {RecordingContext} from "./RecordingsContextProvider";
import CalendarWeek from "./CalendarWeek";
import Loading from "./Loading";
import DateRangeSelect from "./DateRangeSelect";
import RecordingStatistics from "./RecordingStatistics";
import Range from "../utils/Range";

function getRange(start, amount) {
    const end = new Date(start)
    end.setDate(start.getDate() + amount)

    return new Range(start, end)
}

function getThisWeek() {
    const prevMonday = new Date();
    prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));

    return getRange(prevMonday, 7)
}

function CalendarDisplay(props) {

    const { recordings, loading, search } = useContext(RecordingContext)

    const [range, setRange] = useState(getThisWeek())

    useEffect(() => {
        search(range);
    }, [range]);

    const addDays = (offset) => {
        const newDate = new Date(range.from)
        newDate.setDate(range.from.getDate() + offset)

        setRange(getRange(newDate, 7))
    }

    if(loading) {
        return <Loading/>
    }

    return (
        <div>
            <CalendarWeek recordings={recordings} range={range} />
            <DateRangeSelect addDays={addDays}/>
            <RecordingStatistics range={range}/>
        </div>
    );
}

export default CalendarDisplay;
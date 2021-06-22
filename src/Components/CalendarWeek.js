import React from 'react';
import {formatDate} from "../utils/Date";
import PropTypes from "prop-types";
import Range from "../utils/Range";

const getDaysOfWeek = (startDate) => {
    const array = []

    for(const day of [0,1,2,3,4,5,6]) {
        const date = new Date(startDate)
        date.setDate(date.getDate() + day)
        array.push(formatDate(date))
    }

    return array
}

const isToday = (date) => {
    return formatDate(new Date()) === date
}

function CalendarWeek(props) {

    const find = (date) => {
        return props.recordings.find(r => r.date === date)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Calories</th>
            </tr>
            </thead>
            <tbody>
            {getDaysOfWeek(props.range.from).map((date) => {
                var recording = find(date)

                if(recording == null) {
                    recording = {}
                }

                return <tr className={isToday(date) ? "today" : ""} key={date}>
                    <td>{date}</td>
                    <td>{recording.weight}</td>
                    <td>{recording.calories}</td>
                </tr>}
            )}
            </tbody>
        </table>
    );
}

CalendarWeek.propTypes = {
    range: PropTypes.instanceOf(Range),
    recordings: PropTypes.array
}

export default CalendarWeek;
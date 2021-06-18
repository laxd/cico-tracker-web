import React from 'react';
import {formatDate} from "../utils/Date";

const getDaysOfWeek = (startDate) => {
    console.log(`Creating days of week from ${startDate}`)
    const array = []

    for(const day of [0,1,2,3,4,5,6]) {
        const date = new Date(startDate)
        console.log(date)
        date.setDate(date.getDate() + day)
        console.log(date)
        array.push(formatDate(date))
    }

    console.log(array)

    return array
}

function CalendarWeek(props) {
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
            {getDaysOfWeek(props.startDate).map((date) => {
                return <tr key={date}>
                    <td>{date}</td>
                    <td>{props.recordings[date] == null ? "" : props.recordings[date].weight}</td>
                    <td>{props.recordings[date] == null ? "" : props.recordings[date].calories}</td>
                </tr>}
            )}
            </tbody>
        </table>
    );
}

export default CalendarWeek;
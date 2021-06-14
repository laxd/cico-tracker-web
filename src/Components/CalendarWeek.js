import React from 'react';

function CalendarWeek(props) {
    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Calories</th>
            </tr>
            {props.recordings.map((recording) => {
                return <tr>
                    <td>{recording.date}</td>
                    <td>{recording.weight}</td>
                    <td>{recording.calories}</td>
                </tr>
            })}
        </table>
    );
}

export default CalendarWeek;
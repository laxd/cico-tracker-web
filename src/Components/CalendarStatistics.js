import React from 'react';
import PropTypes from "prop-types";

const avg = (values) => {
    if(values.length === 0) {
        return 0
    }

    values = values.filter(i => i != null)
    console.log(`Getting avg: ${values}`)
    const count = values.reduce((a,b) => a + b, 0)
    return (count / values.length).toString()
}

const change = (values) => {
    if(values.length === 0) {
        return 0
    }

    values = values.filter(i => i != null)
    console.log(`Getting change: ${values}`)
    const first = values[0]
    const last = values[values.length - 1]

    console.log(`first: ${first}, last: ${last}`)

    return (first - last).toString()
}

function CalendarStatistics(props) {
    if(props.recordings === undefined) {
        return <></>
    }

    return (
        <div className="stats-display">
            <div className="stats-weight">
                <div className="weight-average">
                    {avg(props.recordings.map(r => r.weight))}
                </div>
                <div className="weight-change">
                    ({change(props.recordings.map(r => r.weight))})
                </div>
            </div>
            <div className="stats-calories">
                <div className="calories-average">
                    {avg(props.recordings.map(r => r.calories))}
                </div>
                <div className="calories-change">
                    ({change(props.recordings.map(r => r.calories))})
                </div>
            </div>
        </div>
    );
}

CalendarStatistics.propTypes = {
    recordings: PropTypes.array
}

export default CalendarStatistics;
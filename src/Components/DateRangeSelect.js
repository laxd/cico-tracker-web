import React from 'react';

function DateRangeSelect(props) {
    return (
        <div>
            <button onClick={() => props.addDays(-7)}>Previous week</button>
            <button onClick={() => props.addDays(7)}>Next week</button>
        </div>
    );
}

export default DateRangeSelect;
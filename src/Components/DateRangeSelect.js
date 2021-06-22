import React from 'react';

function DateRangeSelect({ addDays }) {
    return (
        <div>
            <button onClick={() => addDays(-7)}>Previous week</button>
            <button onClick={() => addDays(7)}>Next week</button>
        </div>
    );
}

export default DateRangeSelect;
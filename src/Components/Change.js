import React from 'react';

function Change({ changeAmount }) {
    return (
        <div className={changeAmount > 0 ? "change change-positive" : "change change-negative"}>
            {changeAmount}
        </div>
    );
}

export default Change;
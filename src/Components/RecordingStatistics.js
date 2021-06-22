import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Change from "./Change";
import {CicoApi} from "../utils/CicoApi";
import Average from "./Average";
import Range from "../utils/Range"

const BASE_URL = "http://localhost:8080"
const API = new CicoApi({baseUrl: BASE_URL})

function RecordingStatistics({range}) {

    const [stats, setStats] = useState({});

    useEffect(() => {
        API.getStats(range.from, range.to)
            .then((stats) => {
                console.log(`Got stats: ${stats}`)

                setStats(stats)
            })
    }, [range]);

    return (
        <div className="stats-display">
            <Change changeAmount={stats.changeInWeight}/>
            <Average averageVal={stats.averageCalories}/>
        </div>
    );
}

RecordingStatistics.propTypes = {
    range: PropTypes.instanceOf(Range)
}

export default RecordingStatistics;
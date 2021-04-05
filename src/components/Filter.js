import React from 'react'

const Filter = () => {
    return (
        <div className="Filter">
            <h2 className="Filter--label">Filter</h2>
            <div className="Status">
                <p>all</p>
                <p>complete</p>
                <p>todo</p>
            </div>
            <div className="Actions">
                <p>Check all</p>
                <p>Clear</p>
            </div>
            <div className="Tracker">
                <p>Remaining</p>
                <p className="Tracker--number">4</p>
            </div>
        </div>
    )
}

export default Filter

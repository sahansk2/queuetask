import React, { useState } from 'react'

const MetaDisplay = ({ count }) => {
    return (
        <div>
            <p>Total number of entries: {count}</p>
        </div>
    )
}

const TaskDisplay = ({ showAll, entries }) => {
    const firstEntry = entries.length > 0 ? entries[0] : ""
    const otherEntries = showAll && entries.length > 0 ? entries.slice(1) : []
    if (firstEntry) {
        return (
            <ul className="list-group">
                <li key={firstEntry} className="list-group-item active">{firstEntry}</li>
                {otherEntries.map(entry => <li key={entry} className="list-group-item">{entry}</li>)}
            </ul>
        )
    } else {
        return <p class="alert alert-success">All Done!</p>
    }
}

const Heading = () => {
    return (
        <div class="jumbotron">
            <h1>QueueTask</h1>
        </div>
    )
}

const Content = () => {
    const [newEntry, setNewEntry] = useState("")
    const [entries, setEntries] = useState([])
    const [showAll, setShowAll] = useState(false)

    const removeTop = () => {
        if (entries.length > 0) {
            setEntries(entries.slice(1))
        }
    }

    const shiftNext = () => {
        if (entries.length > 1) {
            setEntries([...entries.slice(1), entries[0]])
        }
    }

    const toggleShowAll = (event) => {
        setShowAll(event.target.checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newEntry.length > 0) {
            setEntries([...entries, newEntry])
            setNewEntry("")
        }
    }

    const handleInputChange = (event) => {
        setNewEntry(event.target.value)
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={newEntry} onChange={handleInputChange}/>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div className="btn-group" role="group" aria-label="taskActionGroup">
                <button onClick={removeTop} className="btn btn-success">Remove top</button>
                <button onClick={shiftNext} className="btn btn-secondary">Shift Next</button>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="showAllCheckbox" onClick={toggleShowAll}/>
                <label class="custom-control-label" for="showAllCheckbox">Show All Tasks</label>
            </div>
            {/* <MetaDisplay count={entries.length}/> */}
            <div className="container">
                <TaskDisplay showAll={showAll} entries={entries}/>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Heading/>
            <Content/>
        </div>
    )
}

export default App;
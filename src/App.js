import React, { useState, useEffect } from 'react'

const TaskDisplay = ({ showAll, tasks }) => {
    const firstTask = tasks.length > 0 ? tasks[0] : ""
    const otherTasks = showAll && tasks.length > 0 ? tasks.slice(1) : []
    if (firstTask) {
        return (
            <ul className="list-group">
                <li key={firstTask.creationDate} className="list-group-item active">{firstTask.value}</li>
                {otherTasks.map(t => <li key={t.creationDate} className="list-group-item">{t.value}</li>)}
            </ul>
        )
    } else {
        return <p className="alert alert-success">All Done!</p>
    }
}

const Heading = () => {
    return (
        <div className="jumbotron text-center">
            <h1>QueueTask</h1>
            <em>Deal with the task at hand, and <strong>only</strong> the task at hand.</em>
        </div>
    )
}

const Content = () => {
    const [newEntry, setNewEntry] = useState("")
    const [tasks, setTasks] = useState([])
    const [showAll, setShowAll] = useState(false)

    const updateTitle = useEffect(() => {
        document.title = tasks.length > 0 ? `(${tasks.length}) QueueTask` : "QueueTask"
    }, [tasks])

    const storeToLocal = useEffect(() => {
        const savedTasksLS = JSON.parse(localStorage.getItem('savedTasks'))
        if (savedTasksLS) {
            setTasks(savedTasksLS)
        }
    }, [])

    const setAndStoreTasks = (updatedTasks) => {
        setTasks(updatedTasks)
        localStorage.setItem('savedTasks', JSON.stringify(updatedTasks))
    }

    const removeTop = () => {
        if (tasks.length > 0) {
            setAndStoreTasks(tasks.slice(1))
        }
    }

    const shiftNext = () => {
        if (tasks.length > 1) {
            setAndStoreTasks([...tasks.slice(1), tasks[0]])
        }
    }

    const toggleShowAll = (event) => {
        setShowAll(event.target.checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newEntry.length > 0) {
            const newTask = {
                value: newEntry,
                creationDate: new Date().toISOString()
            }
            const updatedTasks = [...tasks, newTask]
            setAndStoreTasks(updatedTasks)
            setNewEntry("")
        }
    }

    const handleInputChange = (event) => {
        setNewEntry(event.target.value)
    }

    return (
        <div className="container text-center">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="showAllCheckbox" onClick={toggleShowAll}/>
                <label className="custom-control-label" for="showAllCheckbox">Show All Tasks</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={newEntry} onChange={handleInputChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="btn-group m-1" role="group" aria-label="taskActionGroup">
                <button onClick={removeTop} className="btn btn-success">Remove Top</button>
                <button onClick={shiftNext} className="btn btn-secondary">Reveal Next</button>
            </div>

            {/* <MetaDisplay count={tasks.length}/> */}
            <div className="m-3">
                <TaskDisplay showAll={showAll} tasks={tasks}/>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer p-1">
            <div className="container p-1">
                <div className="row">
                    <div className="col text-right">
                        <a href="https://www.sahansk.com">© 2021 Sahan Kumarasinghe</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
const App = () => {
    return (
        <div>
            <Heading/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;
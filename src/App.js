import React, {useState} from 'react'
import Create from './Create'
import Planner from './Planner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
    const [mornPlanner, setMornPlanner] = useState([]);
    const [afterPlanner, setAfterPlanner] = useState([]);
    const [evenPlanner, setEvenPlanner] = useState([]);


    const handleChange = (setPlanner,newArray) => {
        setPlanner(newArray)
    }

    const removePlan = (catPlanner, setCatPlanner, id) => {
        const newPlans = catPlanner.filter((plan) => plan.id !== id);
        setCatPlanner(newPlans)
    }

    return (
        <main>
            <div className = 'container-fluid'>
                <div className = 'row align-items-start'>
                    <div className = 'col-lg-3'>
                        <h1 className = 'title'>daily</h1>
                        <h1 className = 'title'>planner</h1>
                        <Create onArrayChangeM={(morningPlanner) =>handleChange(setMornPlanner, morningPlanner)} 
                        onArrayChangeA={(afternoonPlanner) =>handleChange(setAfterPlanner, afternoonPlanner)} 
                        onArrayChangeE={(eveningPlanner) =>handleChange(setEvenPlanner, eveningPlanner)}/>
                    </div>
                    <div className = 'col-lg'>
                        <Planner morningPlanner={mornPlanner} setMorningPlanner={setMornPlanner}
                        afternoonPlanner={afterPlanner} setAfternoonPlanner={setAfterPlanner}
                        eveningPlanner={evenPlanner} setEveningPlanner={setEvenPlanner}
                        removePlan= {(catPlanner, setCatPlanner,id) =>removePlan(catPlanner,setCatPlanner,id)}/>
                    </div>
                </div>
            </div>
        </main>


    );
}

export default App;

import Morning from './Morning';
import Afternoon from './Afternoon';
import Evening from './Evening';

const Planner = ({
    morningPlanner, setMorningPlanner,
    afternoonPlanner, setAfternoonPlanner,
    eveningPlanner, setEveningPlanner,
    removePlan})  =>  {



    const donePlan = (setPlanner, itemId) => {
        setPlanner((prevPlanner) =>
        prevPlanner.map((plan) =>
        plan.id === itemId ? { ...plan, done: !plan.done } : plan));
    };

    const editPlan = (setPlanner, itemId, newTitle, newNotes) => {
        setPlanner((prevPlanner) =>
        prevPlanner.map((plan) =>
        plan.id === itemId ? {...plan, title: newTitle, note: newNotes } : plan));
    };

return (
    <section className='planner'>
        <div className='row align-items-stretch'>
            <div className='row-lg'>
                    <h2 className='time'>morning</h2>
                    <div className='line'></div>
            </div>
            <div className= 'container'>
                <div className='row d-flex flex-wrap'>
                    {morningPlanner.length === 0 ? (

                        <section className='plansStyle'>
                    <div className='emptyT text-center'>
                        <br/>
                        <h3>no plans yet</h3>
                    </div>
                    <div className='emptyP text-center'>
                        <h4><i>Add some plans!</i></h4>
                        <br/>
                    </div>
                </section>
                    ) : (
                        morningPlanner.map((plan) => { return<Morning key = {plan.id} {...plan} 
                        removePlanM={(itemId) =>removePlan(morningPlanner, setMorningPlanner, itemId)} 
                        donePlanM={(itemId) => donePlan(setMorningPlanner, itemId)}
                        onEdit={(itemId, newTitle, newNotes) =>editPlan(setMorningPlanner, itemId,newTitle,newNotes)}></Morning>;})
                        )}
            
                </div>
            </div>
            
            <div className='row-lg'>
                <h2 className='time'>afternoon</h2>
                <div className='line'></div>
            </div>
            <div className='container'>
                <div className='row'>
                    {afternoonPlanner.length === 0 ? (
                        <section className='plansStyle'>
                    <div className='emptyT text-center'>
                        <br/>
                        <h3>no plans yet</h3>
                    </div>
                    <div className='emptyP text-center'>
                        <h4><i>Add some plans!</i></h4>
                        <br/>
                    </div>
                </section>
                    ) : (
                        afternoonPlanner.map((plan) => { return<Afternoon key = {plan.id} {...plan} 
                        removePlanA={(itemId) => removePlan(afternoonPlanner, setAfternoonPlanner, itemId)} 
                        donePlanA={(itemId) => donePlan(setAfternoonPlanner, itemId)}
                        onEdit={(itemId, newTitle, newNotes) =>editPlan(setAfternoonPlanner, itemId,newTitle,newNotes)}></Afternoon>;})
                        )}
                </div>
            </div>

            <div className='row-lg'>
                <h2 className='time'>evening</h2>
                <div className='line'></div>
            </div>
            <div className='container'>
                <div className='row'>
                    {eveningPlanner.length === 0 ? (
                        <section className='plansStyle'>
                    <div className='emptyT text-center'>
                        <br/>
                        <h3>no plans yet</h3>
                    </div>
                    <div className='emptyP text-center'>
                        <h4><i>Add some plans!</i></h4>
                        <br/>
                    </div>
                </section>
                    ) : (
                        eveningPlanner.map((plan) => { return<Evening key = {plan.id} {...plan}
                        removePlanE={(itemId) => removePlan(eveningPlanner, setEveningPlanner, itemId)}
                        donePlanE={(itemId) => donePlan( setEveningPlanner, itemId)}
                        onEdit={(itemId, newTitle, newNotes) =>editPlan(setEveningPlanner, itemId,newTitle,newNotes)}></Evening>;})
                        )}
                </div>
            </div>

            </div>
    </section>
);
};
export default Planner;
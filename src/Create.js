import React, {useState} from 'react'

const Create = (props) => {
    const [id, setId] = useState(1);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [selectedCat, setSelectedCat] = useState(null);
    const [done, setDone] = useState(true);

function handleSelectChange(event) {
    setSelectedCat(event.target.value);
}

    const addNewPlan = () => {
        const newPlan = {id, title, notes,done};
        if (selectedCat === 'morn'){
            setId(id + 1)
            props.onArrayChangeM(morningPlanner =>[...morningPlanner, newPlan] )
        } else if (selectedCat === 'after'){
            setId(id + 1)
            props.onArrayChangeA(afternoonPlanner =>[...afternoonPlanner, newPlan]);
        } else if (selectedCat === 'even'){
            setId(id + 1)
            props.onArrayChangeE(eveningPlanner =>[...eveningPlanner, newPlan]);
        } else {
            console.log('bruh');
        }
    setSelectedCat('');
    setTitle('');
    setNotes('');
    }


    return (
            <section className='create'>
                <div className='form-group col'>
                    <label for='inputCat'>time of day</label>
                    <select className='form-control bg-transparent'  id='inputCat' value={selectedCat} onChange={handleSelectChange} >
                        <option selected  value={' '}>Choose...</option>
                        <option value={'morn'}>Morning</option>
                        <option value={'after'}>Afternoon</option>
                        <option value={'even'}>Evening</option>
                    </select>
                    <label for='colFormLabelSm'>task</label>
                    <div className='col-sm-12'>
                        <input type='text' className='form-control bg-transparent' id='title' placeholder='Walk Dog' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <label for='notes'>notes</label>
                <textarea className='form-control bg-transparent overflow-hidden' id='notes' placeholder='Specifics...' rows='2' value={notes} onChange={(e) => setNotes(e.target.value)} ></textarea>
                
                <div className='d-flex justify-content-end'>
                <button type='button' className='btn btn-outline-info btn-block' onClick={addNewPlan}>submit</button>
                </div>
                </div>
                
            </section>
            
    );
};
export default Create;

import React, { useState } from 'react';
const Evening = ({id,title: initialTitle,notes: initialNotes,removePlanE,donePlanE,done,onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [notes, setNotes] = useState(initialNotes);

    const handleSave = () => {
        onEdit(id, title, notes);
        setIsEditing(false);
    };

    const planStyle = done ? 'plansStyle' : 'doneStyle';
    const textStyle = done ? 'textStyle' : 'textDoneStyle';


return ( 
    <div className='col-md-4 text-wrap'>
        {isEditing ? (
            <section className='plansStyle'>
            <input value={title} className='form-control bg-transparent' onChange={(e) => setTitle(e.target.value)} />
            <textarea className='form-control bg-transparent overflow-hidden' value={notes} onChange={(e) => setNotes(e.target.value)} />
            <div className='d-flex justify-content-end'>
            <button className='btn btn-outline-info btn-block' onClick={handleSave}>save</button>
            </div>
        </section>
    ) : (
        <section className={planStyle}>
            <section className={textStyle}>
                <div>
                    <h3>{title}</h3>
                </div>
                <h4><i>{notes}</i></h4>
            </section>
        <div className='d-flex justify-content-end'>
        <button type='button' className='ml-auto p-2 btn btn-outline-secondary' onClick={() => setIsEditing(true)}>edit</button>
        <button type='button' className='ml-auto p-2 btn btn-outline-secondary' onClick={() => removePlanE(id)}>delete</button>
        <button type='button' className='btn btn-outline-info btn-block' onClick={() => donePlanE(id)}>done</button>
        </div>
        </section>
)}
</div>
)
}
export default Evening;
import { useState } from 'react'

const Form = ({onAdd}) =>{

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        onAdd({ name, course})
        setCourse('')
        setName('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type = 'text'
                    value={name}
                    placeholder='Add Name'
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Add Course'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
            </div>
            <input type='submit' value='submit'/>
        </form>
    )
}

export default Form;
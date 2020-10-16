import React from 'react'
import {useRouteMatch} from "react-router-dom"

export default function Pizza(props) {
    const {toppingsList, values, change, submit} = props
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }
    
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="inputs">
                <label>
                    Pepperoni
                    <input 
                        value={values.pepperoni}
                        name="pepperoni"
                        type="checkbox"
                        onChange={onChange}
                    />
                </label>

                <label>
                    Ham
                    <input 
                        value={values.ham}
                        name="ham"
                        type="checkbox"
                        onChange={onChange}
                    />
                </label>

                <label>
                    Bacon
                    <input 
                        value={values.bacon}
                        name="bacon"
                        type="checkbox"
                        onChange={onChange}
                    />
                </label>

                <label>
                    Chicken
                    <input 
                        value={values.chicken}
                        name="chicken"
                        type="checkbox"
                        onChange={onChange}
                    />
                </label>

                <label>
                    Special Instructions
                    <input 
                        value={values.special}
                        name="special"
                        type="text"
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='submit'>
                <button>Submit</button>
            </div>

            
        </form>
    )
}
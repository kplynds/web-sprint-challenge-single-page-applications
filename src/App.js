import React, {useState} from "react";
import {Route, Link, Switch} from "react-router-dom";
import Pizza from "./Pizza"
import Home from "./Home"

const initialFormValues = {
  pepperoni: false,
  ham: false,
  bacon: false,
  chicken: false, 
  special: "",
}

export default function App(props) {

  const toppings = ["Pepperoni", "Ham", "Bacon", "Chicken"]

  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const submitForm = () => {
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <nav>      
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/pizza">
          <button>Pizza</button>
        </Link>      
      </nav>

      <Switch>
        <Route path="/pizza">
          <Pizza toppingsList={toppings} values={formValues} change={inputChange} submit={submitForm}/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  )
}

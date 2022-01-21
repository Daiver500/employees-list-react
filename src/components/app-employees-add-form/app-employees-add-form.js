import { Component } from "react";
import "./app-employees-add-form.css"

const a = [a,b]
const b = [a,a,b,b,c,c,d]

let c = 0;

for (let i = 0, i < b.length, i++) {
  if (b[i] === a[i]) {
   c++
  }
}
console.log(c)

class EmployeesAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        salary: ""
      }
    }

    onValueChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,          // name, salary совпадают с версткой, а также пропсами, так мы можем достучаться до них
      })
    }

    render () {
        const {name,salary} = this.state
        return (
        <div className="app-employees-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    name="name"
                    value={name}                               // чтобы реакт рендерил форму и контролирова ее поведение в ответ на действия пользователя, нужно добавлять атрибут value и в него добавлять значение state
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
    }
    
}

export default EmployeesAddForm;
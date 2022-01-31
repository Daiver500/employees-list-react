import { Component } from "react";
// import "./app-employees-add-form.css"
import "./app-employees-add-form.scss"              // для использования scss установить пакет nmp i sass --save-dev

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

    onSubmit = (evt) => {
      evt.preventDefault();
      if (this.state.name.length < 3 || !this.state.salary) return;
      this.props.addItem(this.state.name, this.state.salary);
      this.setState({
          name: '',
          salary: ''
      })
  }

    render () {
        const {name,salary} = this.state
        return (
        <div className="app-employees-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
            onSubmit = {this.onSubmit}
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
                        className="btn btn-outline-light"
                        >Добавить</button>
            </form>
        </div>
        )
    }
    
}

export default EmployeesAddForm;
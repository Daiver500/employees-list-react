import { Component } from "react"
import "./app-search.css"

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: ""          // внутренний state
    }
  }

  updateSearch = (evt) => {
    const inputData = evt.target.value;       // будет срабатывать событие, когда пользователь ввел данные
    this.setState({inputData});              // установка локального состояния state
    this.props.updateSearchFromApp(inputData)          // эта часть приходит из другого компонента app.js и здесь мы отправляем информацию из input в основной файл app.js, поднятие локального состояния родителю
  }

  render() {
    return (
    <input
      type="text" 
      className="form-control search-input"
      placeholder = "Найти сотрудника"
      value={this.state.inputData}     // чтобы реакт рендерил форму и контролирова ее поведение в ответ на действия пользователя, нужно добавлять атрибут value и в него добавлять значение state
      onChange={this.updateSearch}></input>  
     // классы идут из библиотеки boostrap
    )
  }
}

export default SearchPanel
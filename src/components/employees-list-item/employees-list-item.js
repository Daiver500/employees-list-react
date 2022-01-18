import { Component } from "react"
import "./employees-list-item.css"

// ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ

/*const EmloyeeListItem = ({name, salary, increase, id}) => { // сюда передаем props из EmployeesList (они ниже)
    
  let classNames = "list-group-item d-flex justify-content-between"  // переменная с классами
  if (increase) {                               // проверяем increase
    classNames = classNames + " increase"
  }

  return (
    <li className={classNames} id = {id}> 
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
  )
}*/

// КЛАССОВЫЙ КОМПОНЕНТ

class EmloyeeListItem extends Component { 
  constructor(props) {
    super(props);
    this.state = {                // состояние increase
      increase: false,            // у всех состояние false
      like: false
    }
  }
  
  onIncrease = () => {
    /*this.setState(({increase}) => ({      // callback, т.к. зависит от прошлого состояния, деструктуризация, тоже самое, что и ниже
      increase: !increase
    }))*/
    
    this.setState(state => ({            // callback, т.к. зависит от прошлого состояния
       increase: !state.increase
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({     
      like: !like
    }))
  }

  render() {
  const {name, salary,  id} = this.props
  const {increase, like} = this.state

  let classNames = "list-group-item d-flex justify-content-between"  // переменная с классами
  if (increase) {                               // проверяем increase
    classNames = classNames + " increase"
  }

  if (like) {                               // проверяем like
    classNames = classNames + " like"
  }

  return (
    <li className={classNames} id = {id}> 
            <span onClick={this.onLike} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
  )

 }
}



export default EmloyeeListItem

// все класссы, которых нет в css файле идут из bootstrap

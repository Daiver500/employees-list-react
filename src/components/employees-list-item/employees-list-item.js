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

const EmloyeeListItem = (props) => { 
 
  const {name, salary,  id, deleteItem, onToggleProp, increase ,like} = props  //onToggleProp вместо onToggleIncrease, onToggleLike

  let classNames = "list-group-item d-flex justify-content-between"  // переменная с классами
  if (increase) {                               // проверяем increase
    classNames = classNames + " increase"
  }

  if (like) {                               // проверяем like
    classNames = classNames + " like"
  }

  return (
    <li className={classNames} id = {id}> 
            <span onClick={onToggleProp} 
            className="list-group-item-label" 
            data-toggle="like">{name}
            </span> {/*через data-toggle будем определять какой атрибут меняем, куда кликаем   */}
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"
                    onClick={deleteItem}
                    ></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
  )


}



export default EmloyeeListItem

// все класссы, которых нет в css файле идут из bootstrap

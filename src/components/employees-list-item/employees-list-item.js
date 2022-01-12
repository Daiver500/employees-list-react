import "./employees-list-item.css"

const EmloyeeListItem = ({name, salary, increase}) => { // сюда передаем props из EmployeesList (они ниже)
    
  let classNames = "list-group-item d-flex justify-content-between"  // переменная с классами
  if (increase) {                               // проверяем increase
    classNames = classNames + " increase"
  }

  return (
    <li className={classNames}> 
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
}

export default EmloyeeListItem

// все класссы, которых нет в css файле идут из bootstrap

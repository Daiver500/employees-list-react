import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"

const EmployeesList = ({data}) => {   // передаем сюда как аргументы данные с сервера
  
  const elements = data.map((item) => {        // каждый объект массива обозначаем как item
    return (
      <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}></EmployeesListItem> // props из данных с сервера
      // <EmployeesListItem {...item}></EmployeesListItem> spread оператор разворачивает наш объект
    )
  })

  return (
      <ul className="employees-list list-group">
         {/*<EmployeesListItem name="Alex" salary={800}></EmployeesListItem> props here, вручную созданные элементы заменили на данные с сервера
         <EmployeesListItem name="Ivan" salary={300}></EmployeesListItem>
         <EmployeesListItem name="Petr" salary={500}></EmployeesListItem>*/}
         {elements}
      </ul>
  )
}

export default EmployeesList; 
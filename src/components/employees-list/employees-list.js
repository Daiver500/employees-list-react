import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"

const EmployeesList = ({data}) => {   // передаем сюда как аргументы данные с сервера
  
  const elements = data.map((item) => {        // каждый объект массива обозначаем как item
    const {name, salary, increase, id} = item
    // const {id, ...itemProps} = item к строке со spread оператором ниже
    return (
      <EmployeesListItem key={id} name={name} salary={salary} increase={increase}></EmployeesListItem> // props из данных с сервера
      // <EmployeesListItem key={id} {...itemProps}></EmployeesListItem> spread оператор разворачивает наш объект
    )
  })

  // key служит для того, чтобы были изменены только те элементы, которые были изменены
  // ключи должны быть уникальными только для их соседей

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

// если меняется родитель, то все элементы внутри уничтожаются и переписываются по необходимости
// если меняется просто элемент(к примеру добавляется класс) изменяется только сам элемент
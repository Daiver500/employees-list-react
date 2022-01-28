import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"

const EmployeesList = ({data, deleteItem, onToggleProp}) => {   // передаем сюда как аргументы данные c app.js, onToggleProp вставили вместо onToggleIncrease, onToggleLike
  
  const elements = data.map((item) => {        // каждый объект массива обозначаем как item
    const {name, salary, increase, like, id} = item
  // const {id, ...itemProps} = item // к строке со spread оператором ниже
    return (
      <EmployeesListItem 
      key={id} 
      name={name} 
      salary={salary} 
      increase={increase}
      like={like}
      deleteItem ={()=> {deleteItem(id)}}  // передаем функцию как props и используем в item
      onToggleProp={(evt)=> {onToggleProp(id, evt.currentTarget.getAttribute("data-toggle"))}} // передаем вниз поиск по id и data-attribute
    ></EmployeesListItem> 
      // <EmployeesListItem key={id} {...itemProps}></EmployeesListItem> // spread оператор разворачивает наш объект
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
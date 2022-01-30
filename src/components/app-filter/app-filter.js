import "./app-filter.css"

const AppFilter = (props) => {
  const buttonsData = [                            // альтернативный вариант написания кнопок
    {name: "all", label: "Все сотрудники"},
    {name: "like", label: "Сотрудники на повышение"},
    {name: "moreThanThousand", label: " З/П больше $1000"}
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const activeButton = props.filterData === name;
    const clazz = activeButton ? "btn-light" : "btn-outline-light";
    return (
    <button 
      className={`btn ${clazz} `} type="button" key={name} onClick={()=>props.filterClick(name)}> {label}
    </button>
    )
  })

  return (
    // СПОСОБ 1 для создания одинаковых элементов
    /*<div className="btn-group">  тоже встроенные в bootstrap классы, все ниже также 
       <button 
         className="btn btn-light"  
         type="button">
        Все сотрудники 
       </button>
       <button 
         className="btn btn-outline-light"  
         type="button">
        Сотрудники на повышение
       </button>
       <button 
         className="btn btn-outline-light"  
         type="button">
        З/П больше $1000
       </button>
    </div>*/

    // СПОСОБ 2
    <div className="btn-group"> 
      {buttons}
    </div>
  )
}

export default AppFilter;
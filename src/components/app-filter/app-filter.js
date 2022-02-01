import "./app-filter.css"

const AppFilter = (props) => {
  const buttonsData = [                            // альтернативный вариант написания кнопок
    {name: "all", label: "Все сотрудники", colored: false},
    {name: "like", label: "Сотрудники на повышение", colored: false},
    {name: "moreThanThousand", label: " З/П больше $1000", colored: true}
  ]

  const buttons = buttonsData.map(({name, label, colored}) => {
    const activeButton = props.filterData === name;
    const clazz = activeButton ? "btn-light" : "btn-outline-light";
    const style = colored ? {color: "red"} : null;                      // в таких стилях необходимо прописывать вендорные префиксы
    return (
    <button 
      className={`btn ${clazz} `} 
      type="button" 
      key={name} 
      onClick={()=>props.filterClick(name)}
      style={style}> 
      {label}
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
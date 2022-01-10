import "./app-filter.css"

const AppFilter = () => {
  return (
    <div className="btn-group">  {/*тоже встроенные в bootstrap классы, все ниже также */}
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
    </div>
  )
}

export default AppFilter;
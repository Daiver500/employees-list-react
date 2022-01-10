import "./app-search.css"

const SearchPanel = () => {
  return (
      <input
      type="text" 
      className="form-control search-input"
      placeholder = "Найти сотрудника">
      </input> // классы идут из библиотеки boostrap
  )
}

export default SearchPanel
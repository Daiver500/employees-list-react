import "./app-header.css";

const AppHeader = ({employees, increased}) => {
    return (
        <div className="app-header">
            <h1>Учет сотрудников в компании АБС</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppHeader;
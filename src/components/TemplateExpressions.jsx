const TemplateExpressions = () => {
    const name = "Gustavo"
    const data = {
        age: 20,
        job: "Programmer",
    }
    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Age: {data.age}</p>
            <p>Job: {data.job}</p>
        </div>    
    )
}

export default TemplateExpressions
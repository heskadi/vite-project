const TemplateExpressions = () => {
    const name = "Gustavo"
    const data = {
        age: 20,
        job: "Programmer",
    }
    return (
        <div>
            <h3>Olá {name}</h3>
            <p>Age: {data.age}</p>
            <p>Job: {data.job}</p>
        </div>    
    )
}

export default TemplateExpressions
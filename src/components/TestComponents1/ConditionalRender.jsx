import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Gustavo")
    
    return <div>
        <h3>Visible?</h3>
        {x && <p>If x's true, yes.</p>}
        {!x && <p>If x's false, yes.</p>}
        <h3>If Ternário</h3>
        {name === "Lessa" ? (
            <div>
                <p>The name is equal to Lessa.</p>
            </div>
        ) : (
            <div>
                <p>Name not found.</p>
            </div>
        )}
        <button onClick={() => setName("Lessa")}>Change name.</button>
    </div>
}

export default ConditionalRender
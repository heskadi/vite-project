import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Gustavo", "Lessa", "Souza"])

    const [users, setUsers] = useState([
        {id: 1, name: "Gustavo", age: 31},
        {id: 2, name: "Lessa", age: 21},
        {id: 3, name: "Souza", age: 44}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1
        console.log(randomNumber)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender
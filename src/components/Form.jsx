import { useState } from "react"
import { db } from "../helpers/db"

const Form = () => {

    const [count, setCount] = useState(1)
    const [name, setName] = useState("")

    const handlerSubmit = async event => {
        event.preventDefault()

        if (!name) return

        const newItem = { id: Date.now(), name, count, bought: false }

        try {
            const id = await db.shoppingList.add(newItem)
            console.log({ id })
        } catch (error) {
            console.error(error)
        }

        setCount(1)
        setName("")
    }

    return (
        <form onSubmit={event => handlerSubmit(event)} className="block">
            <select value={count} onChange={event => setCount(event.target.value)} className="mr-1 p-1 border border-slate-800 rounded-lg">
                {
                    [...Array(10).keys()].map(
                        item => (
                            <option key={item} value={item + 1}>{ item + 1 }</option>
                        )
                    )
                }
            </select>
            <input type="text" value={name} onChange={event => setName(event.target.value)} className="p-1 border border-slate-800 rounded-lg" />
            <input type="submit" value="Add" className="ml-1 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg"/>
        </form>
    )
}

export default Form
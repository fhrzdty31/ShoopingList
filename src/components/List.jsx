import { useLiveQuery } from "dexie-react-hooks"
import { db } from "./../helpers/db.js"

const List = () => {

    const lists = useLiveQuery(
        () => db.shoppingList.toArray()
    )

    const handlerChecked = id => {
        db.shoppingList.update(id, { bought: true })
    }

    const handlerDeleteList = id => {
        db.shoppingList.where("id").anyOf(id).delete()
    }

    return Array.isArray(lists) ? lists.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {
                lists.map(
                    list => (
                        <div key={list.id} className={"flex items-center py-3 px-4 border rounded-xl shadow-md" + ((list.bought) ? " shadow-green-500" : " shadow-blue-500")}>
                            <div className={"flex w-full" + ((list.bought) ? " line-through" : "")}>
                                <h1 className="text-xl font-bold">{list.count}</h1>
                                <span className="px-2 text-xl font-bold">|</span>
                                <h2 className="w-full text-xl font-bold">{list.name}</h2>
                            </div>
                            <button onClick={() => {(list.bought) ? handlerDeleteList(list.id) : handlerChecked(list.id)}} className="flex items-center justify-center w-8 h-7 bg-red-600 hover:bg-red-800 rounded-full">
                                <span className="text-white font-bold">X</span>
                            </button>
                        </div>
                    )
                ) 
            }
        </div>
    ) : (
        <div className="flex justify-center">
            <h1 className="pt-10 text-2xl font-bold">Empty Shopping List</h1>
        </div>
    ) : (
        <div className="flex justify-center">
            <h1 className="pt-10 text-2xl font-bold">Error Data</h1>
        </div>
    )
}

export default List
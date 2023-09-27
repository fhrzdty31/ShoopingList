import Dexie from "dexie"

const  db = new Dexie('app-data')

db.version(1).stores(
    {
        shoppingList: "id, name, count, bought"
    }
)

export { db }
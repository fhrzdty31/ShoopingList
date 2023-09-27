import { HeaderComponent, FormComponent, ListComponent } from "./../components/index.js"

const AppReact = () => {
    return (
        <div className="p-10">
            <div className="flex justify-between items-center pb-3">
                <HeaderComponent />
                <FormComponent />
            </div>
            <div className="pt-5 border-t">
                <ListComponent />
            </div>
        </div>
    )
}

export default AppReact
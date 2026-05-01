import ButtonNavLeft from "../components/buttons/ButtonNavLeft"


function NavBarLeft() {
    return (

        <div className="w-69 h-screen p-4 bg-(--Widgets-background) text-white items-center justify-between flex flex-col">

            <h2 className="text-2xl font-bold p-4">Menu</h2>

            <div className="h-full">

                <ButtonNavLeft />
                <ButtonNavLeft />
                <ButtonNavLeft />
                <ButtonNavLeft />
                <ButtonNavLeft />
                <ButtonNavLeft />
                
            </div>

            <div>
                <ButtonNavLeft />
                <ButtonNavLeft />
            </div>

        </div>
    )
}

export default NavBarLeft
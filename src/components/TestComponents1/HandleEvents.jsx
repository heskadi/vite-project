const Events = () => {

    const handleMyEvent = (e) => {
        console.log("EventTest")
        //console.log(e) - Inspecionar informações da função chamada.
    };

    const RenderSomething = (x) => {
        if(x) {
            return <h3>RenderTest1</h3>
        } else {
            return <h3>RenderTeste2</h3>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>TestButtonEvent</button>
                {/*
                handleMyEvent = Roda somente quando clicar no botão.
                handleMyEvent() = Roda também ao carregar a página.
                */}
            
                    <button onClick={() => console.log("Click")}>
                        TestButton2
                    </button>
                    <button onClick={() => {
                        if(true) {
                            console.log("This should not exist.")
                        }
                    }}>
                        TestButton3
                    </button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    )
}

export default Events
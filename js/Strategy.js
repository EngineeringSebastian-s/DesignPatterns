//Definir interfaz estrategia

class StrategyTravel{
    Travel(destination){
        throw new console.error("No se ha implementado la estrategia");
    }
}

//Crear las estrategias concretas

class BoatStrategy extends StrategyTravel{
    Travel(destination){
        console.log("Viajando en Barco a " + destination)
    }
}

class PlaneStrategy extends StrategyTravel{
    Travel(destination){
        console.log("Viajando en Avion a " + destination)
    }
}

class TravelContext{
    constructor(strategy){
        this.strategy=strategy;
    }

    setStrategy(strategy){
        this.strategy=strategy;
    }

    executeStrategy(destination){
        StrategyTravel.Travel(destination);
    }
}

//Creación de contexto

function appStrategy(){
    const travel = new TravelContext(new PlaneStrategy);
    travel.executeStrategy("Mexico");

    travel.setStrategy(new BoatStrategy);
    travel.executeStrategy("Cancun");


}

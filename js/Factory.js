//Producto Base
class Transport{
    showLogistic(){
        throw new console.error("No se ha implementado transporte");
        
    }
}

//Creación de producto concreto para transporte por mar
class SeaTransport extends Transport{
    showLogistic(){
        console.log("Transporte por mar")
    }
}

//Creación de producto concreto para transporte por mar
class RoadTransport extends Transport{
    showLogistic(){
        console.log("Transporte por ruta")
    }
}

//Creación de Fabrica
class TransportFactory{
    makeTransport(){
        throw new console.error("No se implemento la fabrica de trasnporte")   
    }
}

//Creación de fabrica concreta para transporte por mar

class SeaFactory extends TransportFactory{
    makeTransport(){
       return new SeaTransport;
    }
}


//Creación de la fabrica concreta para transporte por ruta
class RoadFactory extends TransportFactory{
    makeTransport(){
        return new RoadTransport;
    }
}


function appFactory(){
    factory = new RoadFactory;
    const transport =  factory.makeTransport();
    transport.showLogistic();
}
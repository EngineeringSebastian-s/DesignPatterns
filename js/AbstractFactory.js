// Producto base del generador de fabricas (Familia de productos)

class DigitalSensor{
    showMeasure(){
        throw new console.error("No se ha implementado el producto base digital sensor")
    }
}

class AnalogicSensor{
    showMeasure(){
        throw new console.error("No se ha implementado el producto base analogic sensor")
    }
}

// Productos concretos de cada familia de productos

class HumidityAnalogicSensor extends AnalogicSensor{
    showMeasure(){
        console.log("La medida del sensor analogico de humedad es 1");
    }
}

class TDSAnalogicSensor extends AnalogicSensor{
    showMeasure(){
        console.log("La medida del sensor analogico de TDS es 800");
    }
}

class HumidityDigitalSensor extends DigitalSensor{
    showMeasure(){
        console.log("La medida del sensor digital de humedad es 1");
    }
}

class TDSDigitalSensor extends DigitalSensor{
    showMeasure(){
        console.log("La medida del sensor digital de TDS es 800");
    }
}

//Crear fabrica de fabrica

class SensorAbstractFactory{
    createDigitalSensor(){
        throw new console.error("No se ha implementado la fabrica de sensores digitales");
    }

    createAnalogicSensor(){
        throw new console.error("No se ha implentado la fabrica de sensores analogicos");
    }
}

//Fabricas concretas

class HumiditySensorFactory extends SensorAbstractFactory{
    createDigitalSensor(){
        return new HumidityDigitalSensor;
    }

    createAnalogicSensor(){
        return new HumidityAnalogicSensor;
    }
}

class TDSSensorFactory extends SensorAbstractFactory{
    createDigitalSensor(){
        return new TDSDigitalSensor;
    }

    createAnalogicSensor(){
        return new TDSAnalogicSensor;
    }
}

function appAbstractFactory(){
    console.log("Implementación de fabrica de sensores de humedad")
    factory = new HumiditySensorFactory;

    const sensor1 = factory.createDigitalSensor();
    const sensor2 = factory.createAnalogicSensor();
  
    sensor1.showMeasure();
    sensor2.showMeasure();
    
    console.log("Implementación de fabrica de sensores de TDS")
    factory = new TDSSensorFactory;

    const sensor3 = factory.createDigitalSensor();
    const sensor4 = factory.createAnalogicSensor();
  
    sensor3.showMeasure();
    sensor4.showMeasure();
}


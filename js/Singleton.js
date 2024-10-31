/**
 * ¿Cómo implementar Singleton?
 * 1. Hacer privado el constructor
 * 2. Crear un metodo estatico que llame al constructor privado
 *    y guarde la instancia en una variable estatica
 */

class Singleton{

    static instance = undefined; //Variable estatica que guarda la instancia

    constructor(){
        this.connection = this.connection; //Se crea una conexión para simular
    }

    static getInstance(connection){
        if(!Singleton.instance){ //Si aun no se ha creado una instancia entonces que la cree
            Singleton.instance = new Singleton(connection);
        }
        return Singleton.instance; //Si ya esta creada que la retorne
    }
}

function appSingleton(){
    const singleton1 = Singleton.getInstance('conexion1');
    const singleton2 = Singleton.getInstance('conexion2');
    const singleton3 = Singleton.getInstance('conexion3');

    if(singleton1 === singleton2 && singleton2 === singleton3){
        console.log('Singleton funciona ya que la conexión 1, conexion 2 y conexión 3 apunta a la misma instancia de objeto');
        console.log(singleton1 === singleton2 && singleton2 === singleton3);
    }
    return('Error');
    
}
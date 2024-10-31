/*

Examen de diseño de patrones
Nombre: Sebastián López Osorno

Punto#1

1.1. ¿Cuáles son 2 ventajas de utilizar el patrón Prototype en comparación con otros patrones creacionales como Builder o Factory Method? 

El patron de diseño prototype pertenece a la categoria de patrones creacionales, por lo que se enfoca en la forma en que se crean objetos, siempre buscando flexibilidad
y reutilización de código, por esto protoype plantea la creación de objetos apartir de objetos ya existentes, lo que permite reutilizar código ya existente,
no depender del constructor para crear mas objetos y no tener que configurar los atributos, a diferencia del patron Factory Method, donde depende de tener la fabrica para 
crear nuevos objetos, estableciendo un acoplamiento directo. Habiendo evaluado esta caracteristica, podemos decir que la otra ventaja que Prototype es que desacopla
el cliente de la creación compleja de un objeto.

1.2. Explica con tus propias palabras la diferencia entre el patrón Adapter y el patrón Facade.
Ambos son patrones de diseño estructurales, pero tienen un enfoque diferente, dado que Facade define una fachada para dar uso a un sistema mas complejo, como por ejemplo
una framework con muchas funciones, donde solo se emplean un par de ellas con un proposito final, por lo que es mas optimo definir una función fachada que recibe los parametros
necesarios para su ejecucción, permitiendo tener un main mucho mas limpio. Por otro lado Adapter es un patron que busca comunicar dos clases incompatibles mediante un intermediario o traductor, para que las clases puedan
comunicarse, esto lo hace mediante la creación de una interfaz para la clase solicitante, que corresponde al esquema que requiere para comunicarse, una vez definida que implementa
para clase adaptadora, para que se implementen las funciones con sus acciones necesarias para que se de la comunicación.

2. Flyweight

Desarrolla una aplicación de simulación de tráfico para una ciudad. En el simulador, cada vehículo (carro, autobús, bicicleta) tiene características
similares (color, tipo de motor, marca) pero diferentes posiciones y velocidades. Usa el patrón Flyweight para compartir la información estática de los vehículos 
(color y tipo) mientras almacenas individualmente solo las posiciones y velocidades en cada instancia. Esto optimizará el uso de memoria cuando haya muchos vehículos
en el simulador.

Ciudad (Contenedor)
Vehiculos
Tipos de Vehiculos
Interfaz Tipos de Vehiculos (Contenedor)

Para trabajar con el patron Flyweight, se debe identificar los atributos intrínsecos(datos compartidos) y extrínsecos (datos con variaciones), en este caso los datos que
comparten son color, tipo de motor, marca 
*/
class




class 

/*
3. Preguntas de caso de uso (1,5 unidades): Responda las preguntas escribiendo comentarios en el mismo archivo de código donde resolvió la pregunta práctica:
Caso: Tienes que diseñar un sistema de impresión para una empresa que maneja varios tipos de impresoras: impresoras de documentos, impresoras fotográficas, y plotters. 
Cada impresora tiene un comportamiento específico según el tipo de documento que reciba, pero todas deben tener una interfaz unificada para los usuarios.

3.1. ¿Qué patrón de diseño usarías para asegurarte de que todas las impresoras compartan una misma interfaz y los usuarios no tengan que preocuparse por las diferencias 
técnicas entre ellas?

En este enunciado se puede identificar una interes por como se crean los objetos, lo que puede llevarnos a deducir que se requiere un patron creacional, que permita crear variaciión
de productos sin importar sus especificaciones tecnicas, por lo cual se podria plantear un Factory Method, ya que se parte de la necesidad de crear una Fabrica generadora de productos,
sin embargo al continuar con el ejercicio se puede identificar una mayor complejidad, por lo que migramos a un patron como Abstract Factory, donde se puede crear una fabrica que
crea otras fabricas(para familia de productos), que generen los diferentes productos con sus variaciones.

Combinaciones:

                    Impresoras de docuemntos | impresora de fotografias | impresoras de plitters
    documentos
    fotografias
    plotters



3.2. ¿Cómo podrías usar el patrón Observer para notificar a los usuarios cuando la impresora ha completado un trabajo?

En este caso, haciendo uso del patron observer, se puede plantear la impresora como un notificador que informa sobre sus estado a sus trabajadores (Observer), mediante

3.3. Si quisieras agregar una funcionalidad que permitiera a los usuarios "pausar" y "reanudar" un trabajo de impresión, ¿qué patrón aplicarías para gestionar esta 
funcionalidad?


Command

*/
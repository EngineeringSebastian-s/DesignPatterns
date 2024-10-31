// Clase Flyweight que representa datos intrínsecos (compartidos)
class TreeType {
    constructor(name, color, texture) {
        this.name = name; // Nombre del árbol
        this.color = color; // Color del árbol
        this.texture = texture; // Textura del árbol
    }

    display(x, y) {
        // Mostramos el árbol en las coordenadas dadas
        console.log(`Mostrando ${this.name} de color ${this.color} en (${x}, ${y})`);
    }
}

// Fábrica Flyweight para gestionar la creación de objetos TreeType
class TreeFactory {
    constructor() {
        this.treeTypes = {}; // Almacenamos los tipos de árboles ya creados
    }

    getTreeType(name, color, texture) {
        // Si el tipo de árbol no existe, lo creamos
        const key = `${name}-${color}-${texture}`;
        if (!this.treeTypes[key]) {
            this.treeTypes[key] = new TreeType(name, color, texture);
        }
        return this.treeTypes[key];
    }
}

// Clase que utiliza flyweights (datos extrínsecos: posición)
class Tree {
    constructor(x, y, type) {
        this.x = x; // Coordenada X
        this.y = y; // Coordenada Y
        this.type = type; // Referencia al flyweight (tipo de árbol)
    }

    display() {
        this.type.display(this.x, this.y);
    }
}

// Ejemplo de uso
const factory = new TreeFactory();

// Creación de varios árboles reutilizando el mismo tipo
const tree1 = new Tree(10, 20, factory.getTreeType("Roble", "Verde", "Textura1"));
const tree2 = new Tree(30, 40, factory.getTreeType("Roble", "Verde", "Textura1"));
const tree3 = new Tree(50, 60, factory.getTreeType("Pino", "Verde Oscuro", "Textura2"));

tree1.display(); 
tree2.display(); 
tree3.display();
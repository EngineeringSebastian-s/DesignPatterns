// js/Singleton.js
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        // Inicialización adicional
    }

    log() {
        console.log('Instancia de Singleton');
    }
}

// Exporta la función al contexto global
window.singleton = function() {
    const instance = new Singleton();
    instance.log();
};

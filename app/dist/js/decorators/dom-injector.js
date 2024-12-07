export function donInjector(seletor) {
    return function (target, propetyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propetyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map
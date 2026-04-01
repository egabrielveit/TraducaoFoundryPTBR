Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'TraducaoFoundryPTBR',
            lang: 'pt_BR',
            dir: 'babele-register'
        });
    }
});
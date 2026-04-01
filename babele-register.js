Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'traducao-fabula-ultima-ptbr',
            lang: 'pt-BR',
            dir: 'compendium/projectfu'
        });
    }
});
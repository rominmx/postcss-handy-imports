var postcss = require('postcss');
var uniq = require('lodash/uniq');

module.exports = postcss.plugin('postcss-handy-imports', function(opts) {
    return function(css, result) {
        var imports = [];

        css.walkAtRules('import', function(atRule) {
        	var params = [];
        	params = atRule.params.replace(/['"«»„“”‘’`,\n\t]/g, '').split(' ');
        	imports = uniq(imports.concat(params));
	        atRule.remove();
        });

        imports = imports.reverse();
        console.log(imports);

        imports.forEach(function(importItem) {
        	css.prepend({ 
        		name: 'import', 
        		params: '\'' + importItem + '\'' 
        	});
        });
    }
});
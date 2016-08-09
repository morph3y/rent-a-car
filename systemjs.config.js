(function (global) {
    var map = {
        'app': 'app',
        '@angular': 'lib/js/@angular',
        'rxjs': 'lib/js/rxjs',
        'symbol-observable': 'lib/js/symbol-observable'
    };
    var packages = {
        'app': { main: 'main', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'zonejs': { main: 'zone', defaultExtension: 'js' },
        'reflect-metadata': { main: 'Reflect', defaultExtension: 'js' },
        'symbol-observable': { main: 'index', defaultExtension: 'js' }
    };
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade'
    ];
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);

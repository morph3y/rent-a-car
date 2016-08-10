(function (global) {
    var map = {
        'app': 'app',
        '@angular': 'lib/js/@angular',
        'angular2-in-memory-web-api': 'lib/js/angular2-in-memory-web-api',
        'rxjs': 'lib/js/rxjs',
    };
    var packages = {
        'app': { main: 'main', defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
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
    ngPackageNames.forEach(System.packageWithIndex ? packIndex : packUmd);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);

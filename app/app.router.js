"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./components/pages/about.component');
var home_component_1 = require('./components/pages/home.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.appRouterProviders = [
    router_1.RouterModule(routes)
];
//# sourceMappingURL=app.router.js.map
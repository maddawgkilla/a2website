import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];

export const appRouterProviders = [
    RouterModule(routes)
];
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/nested-component/about-home.component';
import { AboutItemComponent } from './about/nested-component/about-item.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', component: AboutHomeComponent }, // url: about/
            { path: 'item/:id', component: AboutItemComponent } // url: about/item
        ]
    }
];
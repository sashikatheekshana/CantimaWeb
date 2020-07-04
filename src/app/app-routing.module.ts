import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstockComponent } from './instock/instock.component';
import { SigninComponent } from './signin/signin.component';

    const routes: Routes = [
        
        { path: 'instock',        component: InstockComponent },
        { path: 'signin',         component: SigninComponent },

           
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
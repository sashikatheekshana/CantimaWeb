import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { InstockComponent } from './instock/instock.component';

    const routes: Routes = [
        {
            path: 'instock',        component: InstockComponent},
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
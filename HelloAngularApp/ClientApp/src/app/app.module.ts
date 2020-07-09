import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';

import { ProductFormComponent } from './product/product-form.component';
import { ProductCreateComponent } from './product/product-create.component';
import { ProductEditComponent } from './product/product-edit.component';
import { NotFoundComponent } from './product/not-found.component';
import { NavBarComponent} from './navbar/nav.component';
import { DayNightComponent } from './DayNightMode/day-night.component';
import { DayNightTestComponent } from './DayNightModeTest/day-nightTest.component';

import { DataService } from './services/data.service';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'create', component: ProductCreateComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent,
        ProductFormComponent, NotFoundComponent, NavBarComponent, DayNightComponent, DayNightTestComponent],
    providers: [DataService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductFormComponent } from './product/product-form.component';
import { ProductCreateComponent } from './product/product-create.component';
import { ProductEditComponent } from './product/product-edit.component';
import { NotFoundComponent } from './product/not-found.component';
import { NavBarComponent } from './navbar/nav.component';
import { DayNightComponent } from './DayNightMode/day-night.component';
import { DayNightTestComponent } from './DayNightModeTest/day-nightTest.component';
import { DataService } from './services/data.service';
// определение маршрутов
const appRoutes = [
    { path: '', component: ProductListComponent },
    { path: 'create', component: ProductCreateComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    { path: '**', component: NotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
        declarations: [AppComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent,
            ProductFormComponent, NotFoundComponent, NavBarComponent, DayNightComponent, DayNightTestComponent],
        providers: [DataService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
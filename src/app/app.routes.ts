import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact-form', component: ContactFormComponent},
    {path: 'product-list', component: ProductListComponent},
];

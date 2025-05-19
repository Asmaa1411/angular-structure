import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact-form', component: ContactFormComponent}
];

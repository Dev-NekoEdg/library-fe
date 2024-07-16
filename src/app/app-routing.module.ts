import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {path:"books", component: BooksComponent, pathMatch: "full"},
  {path:"about", component: AboutComponent, pathMatch: "full"},
  {path:"register", component: RegisterUserComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

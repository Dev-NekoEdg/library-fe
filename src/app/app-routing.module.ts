import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  {path:"books", component: BooksComponent, pathMatch: "full"},
  {path:"about", component: AboutComponent, pathMatch: "full"},
  {path:"home", component: AboutComponent, pathMatch: "full"},
  {path:"users/register", component: RegisterUserComponent, pathMatch: "full"},
  {path:"login", component: LoginComponent, pathMatch: "full"},
  {path:"authors", component: AuthorComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

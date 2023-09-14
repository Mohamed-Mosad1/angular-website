import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "portfolio", component: PortfolioComponent, title: "portfolio" },
  { path: "contact", component: ContactComponent, title: "Contact" },
  { path: "**", component: NotfoundComponent, title: "Not Found Page" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

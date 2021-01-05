import { SearchComponent } from './pages/search/search.component';
import { SocialComponent } from './pages/social/social.component';
import { HelpComponent } from './pages/help/help.component';
import { IndexComponent } from './pages/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HoeWerktDitComponent } from './pages/hoe-werkt-dit/hoe-werkt-dit.component';
import { WieZijnWijComponent } from './pages/wie-zijn-wij/wie-zijn-wij.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: IndexComponent,
  },
  {
    path: 'hoe-werkt-dit',
    component: HoeWerktDitComponent,
  },
  {
    path: 'wie-zijn-wij',
    component: WieZijnWijComponent,
  },
  {
    path: 'social',
    component: SocialComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

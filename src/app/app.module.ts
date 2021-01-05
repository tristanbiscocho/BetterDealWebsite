import { FooterModule } from './shared/footer/footer.module';
import { PageHeaderModule } from './shared/page-header/page-header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SocialComponent } from './pages/social/social.component';
import { HelpComponent } from './pages/help/help.component';
import { SearchComponent } from './pages/search/search.component';
import { WieZijnWijComponent } from './pages/wie-zijn-wij/wie-zijn-wij.component';
import { HoeWerktDitComponent } from './pages/hoe-werkt-dit/hoe-werkt-dit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    SocialComponent,
    HelpComponent,
    SearchComponent,
    WieZijnWijComponent,
    HoeWerktDitComponent,
  ],
  imports: [
    BrowserModule,
    PageHeaderModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

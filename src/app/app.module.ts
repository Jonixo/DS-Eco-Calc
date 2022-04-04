import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {OutputsComponent} from './outputs/outputs.component';
import {HttpClientModule} from '@angular/common/http';
import {CraftingParentComponent} from './crafting-parent/crafting-parent.component';
import {CookieService} from 'ngx-cookie-service';
import {ReleaseNotesComponent} from './release-notes/release-notes.component';
import {NgxWebstorageModule} from 'ngx-webstorage-v2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    IngredientsComponent,
    OutputsComponent,
    CraftingParentComponent,
    ReleaseNotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

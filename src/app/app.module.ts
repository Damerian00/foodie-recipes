import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FdheaderComponent } from './components/fdheader/fdheader.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FdfooterComponent } from './components/fdfooter/fdfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FdheaderComponent,
    RecipeComponent,
    FdfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

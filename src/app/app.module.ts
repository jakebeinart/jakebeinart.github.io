import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { UnionPacificModalComponent } from './modals/union-pacific-modal/union-pacific-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsSectionComponent,
    UnionPacificModalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

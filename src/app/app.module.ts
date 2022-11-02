import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { UnionPacificModalComponent } from './modals/union-pacific-modal/union-pacific-modal.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AttModalComponent } from './modals/att-modal/att-modal.component';
import { MstModalComponent } from './modals/mst-modal/mst-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsSectionComponent,
    UnionPacificModalComponent,
    AttModalComponent,
    MstModalComponent,
    NavBarComponent,
    MastheadComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

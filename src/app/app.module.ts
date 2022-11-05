import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { UnionPacificModalComponent } from './modals/union-pacific-modal/union-pacific-modal.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AttModalComponent } from './modals/att-modal/att-modal.component';
import { MstModalComponent } from './modals/mst-modal/mst-modal.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MastheadComponent } from './sections/masthead/masthead.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CopyrightComponent } from './layout/copyright/copyright.component';
import { ExperienceSectionComponent } from './shared/experience-section/experience-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    UnionPacificModalComponent,
    AttModalComponent,
    MstModalComponent,
    NavBarComponent,
    MastheadComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    ExperienceSectionComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

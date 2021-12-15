import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [AppComponent, LandingpageComponent, AboutComponent, ProjectsComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

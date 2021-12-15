import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  {
    path: "",
    component: LandingpageComponent,
  },
  {
    path: "home",
    component: LandingpageComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavbarModule } from "src/app/shared/navbar/navbar.module";
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ExperiencesComponent, ProjectsComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarModule],
})
export class HomeModule {}

import { Component, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";

import { IProject } from "./../../../models/Projects";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  listProjects$: Observable<IProject[]>;

  projects: IProject[] = [];

  constructor(private _homeService: HomeService) {
    this.listProjects$ = this._homeService.getProjects();
  }

  ngOnInit(): void {
    this.listProjects$.subscribe((list) => {
      this.projects = list;
    });
  }

  handleRedirectToProject(projectUrl: string): void {
    window.open(projectUrl, "_blank");
  }
}

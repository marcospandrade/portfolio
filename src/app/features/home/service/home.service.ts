import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { API_URL } from "src/app/shared/utils/constants";
import { experiences, projects } from "src/app/shared/utils/mocks";
import { IExperience } from "../../models/Experience";
import { IProject } from "../../models/Projects";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}

  getExperiences() {
    return of(experiences);
  }

  getProjects() {
    return of(projects);
  }
}

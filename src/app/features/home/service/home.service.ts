import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { API_URL } from "src/app/shared/utils/constants";
import { IExperience } from "../../models/Experience";
import { IProject } from "../../models/Projects";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}

  getExperiences() {
    return this._httpClient.get<IExperience[]>(`${API_URL}/experiences.json`);
  }

  getProjects() {
    return this._httpClient.get<IProject[]>(`${API_URL}/projects.json`);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { API_URL } from "src/app/shared/utils/constants";
import { Experience, IExperience } from "../../models/Experience";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}

  getExperiences() {
    return this._httpClient.get<IExperience[]>(`${API_URL}/experiences.json`);
  }
}

import { first, firstValueFrom, map, Observable, Subject } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { Experience, IExperience } from "src/app/features/models/Experience";
import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";

@Component({
  selector: "app-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  listExperiences$: Observable<IExperience[]> =
    this._homeService.getExperiences();
  experienceSelected: IExperience = {} as IExperience;

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this.listExperiences$
      .pipe(map((data) => (this.experienceSelected = data[0])))
      .subscribe();
  }

  handleSelectExperience(idSelected: IExperience) {
    this.experienceSelected = idSelected;
  }
}

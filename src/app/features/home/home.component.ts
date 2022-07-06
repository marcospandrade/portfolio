import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { catchError, delay, forkJoin, Observable, of, throwError } from "rxjs";

import { linksSocialMedia } from "src/app/shared/utils/enums";
import { HomeService } from "./service/home.service";
import { Experience, IExperience } from "../models/Experience";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("fade", [
      state("*", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(800)]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  listExperiences: Observable<IExperience[]>;

  constructor(private _homeService: HomeService) {
    this.listExperiences = this._homeService.getExperiences();
  }

  ngOnInit(): void {
    // this.listExperiences.subscribe((data) => {
    //   console.log(data);
    // });
  }

  openLink(socialMedia: string): void {
    const addressSocialMedia =
      linksSocialMedia[socialMedia as keyof typeof linksSocialMedia];

    window.open(addressSocialMedia, "_blank");
  }
}

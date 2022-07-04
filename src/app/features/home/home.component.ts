import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { linksSocialMedia } from "src/app/shared/utils/enums";

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
  constructor() {}

  ngOnInit(): void {}

  openLink(socialMedia: string): void {
    const addressSocialMedia =
      linksSocialMedia[socialMedia as keyof typeof linksSocialMedia];

    window.open(addressSocialMedia, "_blank");
  }
}

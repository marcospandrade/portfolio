import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, CollapseModule.forRoot(), BsDropdownModule.forRoot()],
  exports: [NavbarComponent],
})
export class NavbarModule {}

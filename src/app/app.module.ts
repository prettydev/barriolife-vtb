import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";

import { VtbComponentsModule } from "@sitespirit/vtb-component-library";

import { ItineraryResolver } from "./resolvers/itinerary.resolver";

import { AppComponent } from "./app.component";

import { MinisiteComponent } from "./pages/minisite/minisite.component";

import { AgmCoreModule } from "@agm/core";
import { MenuComponent } from "./components/menu/menu.component";
import { HeroComponent } from "./components/hero/hero.component";
import { MapComponent } from "./components/map/map.component";
import { FlightComponent } from "./components/flight/flight.component";
import { ProgramComponent } from "./components/program/program.component";
import { ConsultantComponent } from "./components/consultant/consultant.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { AccomodationComponent } from "./components/accomodation/accomodation.component";
import { CoverComponent } from "./components/cover/cover.component";
import { ActivityComponent } from "./components/activity/activity.component";
import { AboutComponent } from "./components/about/about.component";
import { TrustedByComponent } from "./components/trusted-by/trusted-by.component";
import { DocumentComponent } from "./components/document/document.component";
import { NgxGalleryModule } from "ngx-gallery";
import { VervoerComponent } from './vervoer/vervoer.component';

@NgModule({
  declarations: [
    AppComponent,
    MinisiteComponent,
    MenuComponent,
    HeroComponent,
    MapComponent,
    FlightComponent,
    ProgramComponent,
    ConsultantComponent,
    FooterComponent,
    OverviewComponent,
    AccomodationComponent,
    CoverComponent,
    ActivityComponent,
    AboutComponent,
    TrustedByComponent,
    DocumentComponent,
    VervoerComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    RouterModule.forRoot([
      {
        path: "",
        component: MinisiteComponent,
        pathMatch: "full",
        resolve: {
          itinerary: ItineraryResolver
        }
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBQvL8zpLzyMviloEZXnXS36cUDku8t3rA"
    }),
    HttpClientModule,
    VtbComponentsModule.forRoot(environment)
  ],
  providers: [ItineraryResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}

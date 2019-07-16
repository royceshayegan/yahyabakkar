import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageComponent } from "./page/page.component";
import { HomeComponent } from "./page/home/home.component";

//Material
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";

//Youtube
import { YoutubeService } from "./youtube.service";
import { Home2Component } from "./page/home2/home2.component";
import { CollapsibleSheathComponent } from "./collapsible-sheath/collapsible-sheath.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { AboutComponent } from "./page/about/about.component";
import { TopnavComponent } from "./layout/topnav/topnav.component";
import { BlueprintComponent } from "./blueprint/blueprint.component";
import { LogoBannerComponent } from "./logo-banner/logo-banner.component";
import { SpeakingComponent } from "./page/speaking/speaking.component";
import { Home3Component } from "./page/home3/home3.component";
import { DividerComponent } from "./divider/divider.component";
import { TypographyComponent } from "./typography/typography.component";
import { AnimatedArrowsComponent } from "./animated-arrows/animated-arrows.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SkewComponent } from "./skew/skew.component";
import { OptInComponent } from "./opt-in/opt-in.component";
import { AssetsComponent } from "./assets/assets.component";
import { FormComponent } from "./page/form/form.component";
import { ApplyComponent } from "./page/apply/apply.component";
import { ScheduleComponent } from "./page/schedule/schedule.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ThanksComponent } from "./page/thanks/thanks.component";
import { HomeworkComponent } from "./page/homework/homework.component";
import { BlueprintPageComponent } from "./page/blueprint/blueprint.component";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    Home2Component,
    CollapsibleSheathComponent,
    ButtonsComponent,
    AboutComponent,
    TopnavComponent,
    BlueprintComponent,
    LogoBannerComponent,
    SpeakingComponent,
    Home3Component,
    DividerComponent,
    TypographyComponent,
    AnimatedArrowsComponent,
    FooterComponent,
    SkewComponent,
    OptInComponent,
    AssetsComponent,
    FormComponent,
    ApplyComponent,
    ScheduleComponent,
    TestimonialsComponent,
    ThanksComponent,
    HomeworkComponent,
    BlueprintPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}

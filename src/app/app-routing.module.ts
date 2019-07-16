import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, Data } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./page/home/home.component";
import { Home3Component } from "./page/home3/home3.component";
import { AboutComponent } from "./page/about/about.component";
import { SpeakingComponent } from "./page/speaking/speaking.component";
import { PageComponent } from "./page/page.component";
import { AssetsComponent } from "./assets/assets.component";
import { FormComponent } from "./page/form/form.component";
import { ApplyComponent } from "./page/apply/apply.component";
import { ScheduleComponent } from "./page/schedule/schedule.component";
import { HomeworkComponent } from "./page/homework/homework.component";
import { ThanksComponent } from "./page/thanks/thanks.component";
import { BlueprintPageComponent } from "./page/blueprint/blueprint.component";

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      {
        path: "",
        component: Home3Component,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "home"
        }
      },
      {
        path: "apply",
        component: ApplyComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "home"
        }
      },
      {
        path: "schedule",
        component: ScheduleComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "noFooter"
        }
      },
      {
        path: "form",
        component: FormComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "noFooter"
        }
      },
      {
        path: "homework",
        component: HomeworkComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "noFooter"
        }
      },
      {
        path: "thanks",
        component: ThanksComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "noFooter"
        }
      },
      {
        path: "blueprint",
        component: BlueprintPageComponent,
        data: {
          title: "Yahya Bakkar",
          metaDescription: "Yahya Bakkar Description",
          pageTitle: "Home",
          pageType: "noFooter"
        }
      }
    ]
  },
  //Assets
  { path: "wp-content/:folder/:file", component: AssetsComponent },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}

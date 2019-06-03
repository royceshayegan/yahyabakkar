import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Data } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { Home3Component } from './page/home3/home3.component';
import { AboutComponent } from './page/about/about.component';
import { SpeakingComponent } from './page/speaking/speaking.component';
import { PageComponent } from './page/page.component';
import { AssetsComponent } from './assets/assets.component';


const routes: Routes = [
  { path: '', 
    component: PageComponent,
    children: [
      { path: '', 
        component: Home3Component, 
        data: { 
          title: 'Yahya Bakkar',
          metaDescription: 'Yahya Bakkar Description', 
          pageTitle: 'Home', 
          pageType: 'home' 
        }
      },
      { path: 'about', 
        component: AboutComponent, 
        data: { 
          title: 'Yahya Bakkar',
          metaDescription: 'Yahya Bakkar Description', 
          pageTitle: 'Home', 
          pageType: 'home' 
        }
      },
      { path: 'speaking', 
        component: HomeComponent, 
        data: { 
          title: 'Yahya Bakkar',
          metaDescription: 'Yahya Bakkar Description', 
          pageTitle: 'Home', 
          pageType: 'home' 
        }
      }
    ]
  },
  //Assets
  { path: 'wp-content/:folder/:file', component: AssetsComponent },

  { path: '**', 
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { AppSettings } from './tools/AppSettings';
import { HttpClientModule } from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import {ReadingsModule} from './readings/readings.module';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/readings',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // ReadingsComponent
  ],
  imports: [
    ReadingsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true, // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategy,

    }),
    HttpClientModule,
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

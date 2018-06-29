import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppSettings } from './tools/AppSettings';
import { HttpClientModule } from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import {ReadingsModule} from './readings/readings.module';
import {VersionsModule} from './versions/versions.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    // VersionsComponent,
    // ReadingsComponent
  ],
  imports: [
    // MatDialogModule,
    VersionsModule,
    ReadingsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true, // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategy,

    }),
    HttpClientModule,
    // MatDialog,
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCopy, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubAPIService } from './services/api/github.api.service';
import { RemoveUnderscorePipe } from './utils/pipes/remove-underscore.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageInfoModule } from './components/language-info/language-info.module';

@NgModule({
  declarations: [
    AppComponent,
    RemoveUnderscorePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatTooltipModule, 
    ClipboardModule,
    MatSnackBarModule,
    LanguageInfoModule
  ],
  providers: [
    GitHubAPIService,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCopy,
      faArrowUpRightFromSquare,
      faEnvelope
    )
  }

}

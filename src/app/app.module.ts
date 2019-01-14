import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CardContainerComponent } from './card-container/card-container.component';
import { HomeComponent } from './home/home.component';
import { StorycardComponent } from './card-container/storycard/storycard.component';
import { RetrieveChannelsService } from './Services/RetriveChannels.service';
import { HttpClientModule } from '@angular/common/http';
import { CommunicationService } from './Services/Communication.service';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    HomeComponent,
    StorycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    RetrieveChannelsService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './header/tabs/tabs.component';
import { SortComponent } from './header/sort/sort.component';
import { FilterComponent } from './header/filter/filter.component';
import { TabsContentComponent } from './tabs-content/tabs-content.component';
import { ChannelTabComponent } from './tabs-content/channel-tab/channel-tab.component';
import { FirstTabComponent } from './tabs-content/first-tab/first-tab.component';
import { SecondTabComponent } from './tabs-content/second-tab/second-tab.component';
import { ContentComponent } from './tabs-content/content/content.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChannelEffects } from './store/effects/channel.effects';
import { ChannelService } from './shared/channel.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducers';
import { ChannelItemsComponent } from './tabs-content/channel-tab/channel-items/channel-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    SortComponent,
    FilterComponent,
    TabsContentComponent,
    ChannelTabComponent,
    FirstTabComponent,
    SecondTabComponent,
    ContentComponent,
    ChannelItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ChannelEffects]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

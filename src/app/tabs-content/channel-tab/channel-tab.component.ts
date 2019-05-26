import { Component, OnInit } from '@angular/core';
import { IChannelState } from 'src/app/store/state/channel.state';
import { Store, select } from '@ngrx/store';
import { selectChannelList } from 'src/app/store/selectors/channel.selector';
import { GetChannels } from 'src/app/store/actions/channel.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-channel-tab',
  templateUrl: './channel-tab.component.html',
  styleUrls: ['./channel-tab.component.scss']
})
export class ChannelTabComponent implements OnInit {

  channels$ = this._store.pipe(select(selectChannelList));
  
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetChannels());
    console.log(this.channels$);
    this.channels$.subscribe((res) => console.log(res));
  }

}

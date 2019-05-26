import { Component, OnInit, Input } from '@angular/core';
import { IChannel } from 'src/app/shared/models/channel.interface';
import { IChannelState } from 'src/app/store/state/channel.state';

@Component({
  selector: 'app-channel-items',
  templateUrl: './channel-items.component.html',
  styleUrls: ['./channel-items.component.scss']
})
export class ChannelItemsComponent implements OnInit {

  @Input()
  channels: IChannel[];

  constructor() { }

  ngOnInit() {
    console.log(this.channels);
  }

}

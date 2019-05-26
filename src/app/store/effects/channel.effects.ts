import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { IChannelState } from '../state/channel.state';
import { Store } from '@ngrx/store';
import { EChannelActions, GetChannelsSuccess, GetChannels } from '../actions/channel.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { selectChannelList } from '../selectors/channel.selector';
import { ChannelService } from 'src/app/shared/channel.service';
import { IChannelResponse } from 'src/app/shared/models/channel-response.interface';
import { of } from 'rxjs';

@Injectable()
export class ChannelEffects {

    constructor(
        private _actions$: Actions,
        private _channelService: ChannelService,
    ) {}

    @Effect()
    getChannels$ = this._actions$.pipe(
        ofType<GetChannels>(EChannelActions.GetChannels),
        switchMap(() => this._channelService.getChannels()),
        switchMap((channelResponse: IChannelResponse) => of(new GetChannelsSuccess({
            total: channelResponse.total,
            channels: channelResponse.channelDetails
        })))
    );
}
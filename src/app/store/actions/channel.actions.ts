import { Action } from '@ngrx/store';
import { IChannel } from '../../shared/models/channel.interface';
import { IChannelState } from '../state/channel.state';

export enum EChannelActions {
    GetChannels = '[Channel] Get Channels',
    GetChannelsSuccess = '[Channel] Get Channels Success',
    GetChannelsFail = '[Channel] Get Channels Fail',
}

export class GetChannels implements Action {
    public readonly type = EChannelActions.GetChannels;
}

export class GetChannelsSuccess implements Action {
    public readonly type = EChannelActions.GetChannelsSuccess;
    constructor(public payload: IChannelState) {}
}

export type ChannelActions = GetChannels | GetChannelsSuccess;
import { IChannelState } from "../state/channel.state";
import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const selectChannels = (state: IAppState) => state.channels;

export const selectChannelList = createSelector(
    selectChannels,
    (state: IChannelState) => state.channels,
);
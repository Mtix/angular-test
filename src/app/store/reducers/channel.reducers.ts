import { initialChannelState } from '../state/channel.state';
import { ChannelActions, EChannelActions } from '../actions/channel.actions';
import { IChannelState } from '../state/channel.state';
import { State } from '@ngrx/store';

export const channelReducers = (
    state = initialChannelState,
    action: ChannelActions
): IChannelState => {
    console.log(action.type);
    switch (action.type) {
        case EChannelActions.GetChannelsSuccess: {
            return {
                ...state,
                total: action.payload.total,
                channels: action.payload.channels
            };
        }

        default: 
            return state;
    }
}

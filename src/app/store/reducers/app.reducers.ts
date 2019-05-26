import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { channelReducers } from './channel.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  channels: channelReducers,
};
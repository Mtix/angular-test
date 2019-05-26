
import { IChannelState, initialChannelState } from './channel.state';

export interface IAppState {
  channels: IChannelState;
}

export const initialAppState: IAppState = {
  channels: initialChannelState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
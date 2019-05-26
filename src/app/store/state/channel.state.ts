import { IChannel } from 'src/app/shared/models/channel.interface';

export interface IChannelState {
    total: number;
    channels: IChannel[];
}

export const initialChannelState: IChannelState = {
    total: null,
    channels: null,
}
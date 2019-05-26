import { IChannel } from './channel.interface';

export interface IChannelResponse {
    total: number;
    channelDetails: Array<IChannel>;
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChannelResponse } from './models/channel-response.interface';
import { map } from 'rxjs/operators';


@Injectable()
export class ChannelService {
    channelsUrl = 'assets/channels.json';

    constructor(private _http: HttpClient) {}

    /**
     * TODO реализовать lazy load кол-во каналов
     */
    getChannels(): Observable<IChannelResponse> {
        return this._http.get<IChannelResponse>(this.channelsUrl).pipe(
            map((data) => {
                data.channelDetails = data.channelDetails.slice(0, 24);

                return data;
            })
        );
    }
} 
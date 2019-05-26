import { IPicture } from './picture.interface';
import { IGenres } from './genres.interface';

export interface IChannel {
    genres: Array<IGenres>;
    ID: number;
    introduce: string;
    picture: IPicture;
    name: string;
}
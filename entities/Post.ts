import { Collection } from "./Collection";
import { Publisable, Comment, Like, Status } from "./Publishable";

export class Post implements Publisable {
    id: any;
    createdDate: Date;
    lastEditedDate: Date;
    title: string;
    text: string;
    comments?: Comment[];
    likes?: Like[];
    pinned: boolean;
    status: Status;
    
    media?: string
    collections?: Collection[]
}
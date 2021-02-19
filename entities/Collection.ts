import { Post } from "./Post";
import { Publisable, Comment, Like, Status } from "./Publishable";

export class Collection implements Publisable {
    id: any;
    createdDate: Date;
    lastEditedDate: Date;
    title: string;
    text: string;
    comments?: Comment[];
    likes?: Like[];
    pinned: boolean;
    status: Status;

    //content?
    events?: Event[];
    posts?: Post[];
}
export interface Publisable extends BasicPublisable{
    text: string;
    comments?: Comment[];
    likes?: Like[];
}

export interface BasicPublisable{
    id;
    createdDate: Date;
    lastEditedDate: Date;
    title: string;
    pinned: boolean;
    status: Status;
}

export enum Status {
    DRAFT = 'Draft',
    PUBLISHED = 'Published',
    PASSED = 'Passed'
}

export class Comment {
    id;
    author: UserVm;
    createdDate: Date;
    text: string;
}

export class Like {
    id;
    author: UserVm;
    createdDate: Date;
}

//no idea what this is 
class UserVm {
    firstName: string;
    lastName: string;
    profileImage?: string;
}
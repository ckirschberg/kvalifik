import { Group } from './Group';
import { User } from './User'
import { BasicPublisable, Status } from './Publishable'

export class Event implements BasicPublisable{
    id;
    createdDate: Date;
    lastEditedDate: Date;
    title: string;
    pinned: boolean;
    status: Status;

    startDate: Date;
    startTime: string;
    endDate: Date;
    endTime: string;
    description: string;
    //schedule?: Schedule[];
    photo?: string;
    location: string;
    responsible: User | Group
    //availableRooms??
}
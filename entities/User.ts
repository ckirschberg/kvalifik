import {Group} from './Group'
export interface User extends BaseUser{
    signupDate: Date;
    username: string;
    password: string;
    groups: Group[];
}

export interface ApplicationUser extends BaseUser{
    aplicationDate: Date;
}

interface BaseUser {
    id;
    profileImage?: string;
    firstName: string;
    lastName: string;
    title?: string;
    role: Role; 
    email: string;
}

enum Role {
    ADMIN = 'Admin',
    STUDENT = 'Student',
    MODERATOR = 'Moderator'
}



import { Events } from './Events';

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

class User {
    
    public events = new Events();
}
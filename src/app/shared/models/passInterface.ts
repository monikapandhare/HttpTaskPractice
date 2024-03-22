

export interface Ipass{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: null | number;
    children: {
        name: string;
        age: number;
    }[]
    | string
    | null
}
export class Registration {
    name: string;
    age: string;
    gender: string;
    email: string;
    address?: Address[] = [];
    password: string;
    tnc: boolean;
    profilePic: string;
}

export class Address {
    country: string;
    state: string;
}
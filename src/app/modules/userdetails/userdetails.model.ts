import { Address } from "./Adress.model";

export interface UserDetails {
	id?: number;
	name?: string;
	age?: string;
	gender?: string;
	email?: string;
	password?: string;
	created_date?: string;
	profilePicture?: any;
	addressLst?: Address[]
	/*active: string;
	isUserPresent: string;
	errorMsg: string;*/
}

/*export class UserDetailsInstance implements UserDetails {
	id: number = 0;
	name: string = '';
	age: string = '';
	gender: string = '';
	email: string = '';
	password: string = '';
	created_date: string = '';
	profilePicture: any = '';
	addressLst: Address[] = []
	constructor() { }
}*/
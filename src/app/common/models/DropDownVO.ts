export class DropDownVO {
    name: string;
    id: number;
    code: number;
    description: string;

    constructor(
        name: string = '',
        id: number = null,
        code: number = null,
        description: string = ''
    ){
        this.name = name;
        this.id = id;
        this.code = code;
        this.description = description;
    }
}
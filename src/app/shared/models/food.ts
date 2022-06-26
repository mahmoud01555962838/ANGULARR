export class Foods{
    id!:number;
    name!:string;
    cookTime!:string;
    price!:number;
    favorite:boolean = false;
    origins!:string[];
    stars:number = 0;
    imageUrl!:string;
    tags?:string[];

}
export class Receta {
    private id: number;
    private title: string|null|undefined;
    private image: string|null|undefined;
    private ingredients: string[]|null|undefined;
    constructor(id:number, title:string|null|undefined, image:string|null|undefined, ingredients:  string[]|null|undefined){
        this.id = id;
        this.title = title;
        this.image = image;
        this.ingredients = ingredients;
    }
    public getId(): number{
        return this.id;
    }
    public getTitle(): string|null|undefined{
        return this.title;
    }
    public getImage(): string|null|undefined{
        return this.image;
    }
    public getIngredients():  string[]|null|undefined{
        return this.ingredients;
    }
}

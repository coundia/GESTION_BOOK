export class Book{
    estPrete: Boolean;
    constructor(public id:number ,public code: string, public title: string , public author: string){
      this.estPrete=false;
    }
}

import {Cd} from "../models/Cd";
import {Book} from "../models/Book";

export class CdBookService{
listCd : Cd [] = [
    {
      id: 1,
      name: 'No woman no cry',
      artist : 'Bob Marley',
      estPrete: false,
    },
    {
      id: 2,
      name: 'Cry',
      artist : 'Rihanna',
      estPrete: true,
    },
    {
      id: 3,
      name: 'Thriller',
      artist : 'Michael Jackson',
      estPrete: false,
    }
  ];

  listBook : Book [] = [
    {
      id: 1,
      code : 'B1',
      title: 'Une si longue lettre',
      author : 'Mariama Ba',
      estPrete: false,
    },
    {
      id: 2,
      code : 'B2',
      title: 'Discours de la methode',
      author : 'Descartes',
      estPrete: true,
    },
    {
      id: 3,
      code : 'B3',
      title: 'Une vie de Boy',
      author : 'Ferdinand OYONO',
      estPrete: false,
    }

  ];

  preterOuRendre(element : Cd | Book){
    element.estPrete = !element.estPrete;
    console.log( element.estPrete);
  };

}

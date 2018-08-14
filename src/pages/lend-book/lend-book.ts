import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import {CdBookService} from "../../services/CdBookService";
import {Book} from "../../models/Book";
@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {
 book : Book;
  constructor(private navParam : NavParams, private viewCtrl : ViewController , private serviceCdBook: CdBookService) {
  }

  ngOnInit() {
     this.book= this.navParam.get('book');
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onPreter(){
    this.serviceCdBook.preterOuRendre(this.book);
  }

}

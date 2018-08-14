import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {CdBookService} from "../../services/CdBookService";
import {Book} from "../../models/Book";
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
 listBook : Book[]=[];
  constructor(public menuCtrl: MenuController, private modalCtrl: ModalController,private serviceBook: CdBookService) {
  }
  ionViewWillEnter() {
    this.listBook = this.serviceBook.listBook.slice();
  }
  onLoadBook(book){
     let  modal = this.modalCtrl.create(LendBookPage, {book : book});
     modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}

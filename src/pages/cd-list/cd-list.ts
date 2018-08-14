import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {CdBookService} from "../../services/CdBookService";
import {Cd} from "../../models/Cd";
import {LendCdPage} from "../lend-cd/lend-cd";

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  listCd : Cd[]=[];
  constructor(public menuCtrl: MenuController, private modalCtrl: ModalController,private serviceBook: CdBookService) {
  }
  ionViewWillEnter() {
    this.listCd = this.serviceBook.listCd.slice();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CdListPage');
  }
  onLoadCd(cd){
    let  modal = this.modalCtrl.create(LendCdPage, {cd : cd});
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}

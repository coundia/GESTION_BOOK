import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import {CdBookService} from "../../services/CdBookService";
import {Cd} from "../../models/Cd";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {
  cd : Cd;

  constructor(private navParam : NavParams, private viewCtrl : ViewController , private serviceCdBook: CdBookService) {
  }

  ngOnInit() {
    this.cd= this.navParam.get('cd');
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onPreter(){
    this.serviceCdBook.preterOuRendre(this.cd);
  }

}

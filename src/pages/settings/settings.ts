import { Component } from '@angular/core';
import {MenuController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public menuCtrl: MenuController, public navParams: NavParams) {
  }


  onToggleMenu() {
    this.menuCtrl.open();
  }

}

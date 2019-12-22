
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
 
@Component({
  selector: 'app-settings',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})


export class SettingsComponent implements OnInit {
  page; 
  modalTitle:string;
  modelId:number;
 
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
 
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
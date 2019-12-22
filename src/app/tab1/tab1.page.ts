import { Component, OnInit, HostListener } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsComponent } from '../setting/setting.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
 dataReturned:any;
 
  constructor(
    public modalController: ModalController
  ) { 
  	this.startTimer();
  }
 
 timeLeft: number = 60;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  async openModal(modalNo) {
    const modal = await this.modalController.create({
      component: SettingsComponent,
      componentProps: {
        "paramID": modalNo,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  
}

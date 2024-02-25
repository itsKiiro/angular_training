import { Component } from '@angular/core';
import { IonHeader,
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonItem,
  IonList,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonItem,
    IonList,
  ],
})
export class NavComponent {
  constructor(private navCtrl: NavController) {}

  navigateToPage(page: string) {
    switch (page) {
        case "home":
            console.log(page);
            this.navCtrl.navigateForward(`/${page}`);
            break;
        case "about":
            console.log(page);
            this.navCtrl.navigateForward(`/${page}`);
            break;
        case "settings":
            console.log(page);
            this.navCtrl.navigateForward(`/${page}`);
            break;
        case "ar":
            console.log(page);
            this.navCtrl.navigateForward(`/${page}`);
            break;
        case "vr":
            console.log(page);
            this.navCtrl.navigateForward(`/${page}`);
            break;
    }
  }
}

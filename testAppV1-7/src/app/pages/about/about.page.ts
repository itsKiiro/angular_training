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
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { NavComponent } from '../../components/nav/nav.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
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
    NavComponent,
    CommonModule,
    IonInput,
    IonButton
  ],
  providers: [DataService]
})
export class AboutPage {

  private dataService: DataService;

  articles: any[] = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  loadArticles(searchTerm: any) {
    this.dataService.getSearchedArticles(searchTerm).subscribe((data) => {
      this.articles = data;
      console.log(this.articles)
      console.log(searchTerm)
    })
  }


}

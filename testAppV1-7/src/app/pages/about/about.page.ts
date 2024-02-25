import { Component, OnInit } from '@angular/core';
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
  IonMenuButton
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
    CommonModule
  ],
  providers: [DataService]
})
export class AboutPage implements OnInit {

  private dataService: DataService;

  articles: any[] = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.dataService.getArticles().subscribe((data) => {
      this.articles = data;
      console.log(this.articles)
    })
  }


}

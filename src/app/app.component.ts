import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mysecondproject';
  cardFree = {plan:"FREE",price:"0",users:"Single User",storage:"0",privateProjects:["text-muted","fas fa-times"],phoneSupport:["text-muted","fas fa-times"],freeSubdomain : ["text-muted","fas fa-times"],statusReport : ["text-muted","fas fa-times"]};
  cardPlus = {plan:"PLUS",price:"9",users:"5 Users",storage:"50",privateProjects:["","fas fa-check"],phoneSupport:["","fas fa-check"],freeSubdomain : ["","fas fa-check"],statusReport : ["text-muted","fas fa-times"]};
  cardPro = {plan:"PRO",price:"49",users:"Unlimited Users",storage:"150",privateProjects:["","fas fa-check"],phoneSupport:["","fas fa-check"],freeSubdomain : ["","fas fa-check"],statusReport : ["","fas fa-check"]};
}

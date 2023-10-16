import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() card = {plan:"FREE",users:"Single User",price:"0",storage:"0",privateProjects:["text-muted","fas fa-times"],phoneSupport:["text-muted","fas fa-times"],freeSubdomain : ["text-muted","fas fa-times"],statusReport : ["text-muted","fas fa-times"]};
}

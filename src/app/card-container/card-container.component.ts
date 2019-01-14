import { Component, OnInit,Input } from '@angular/core';
import { Story } from '../Models/story.model';
import { CommunicationService } from '../Services/Communication.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input('date') date:string;
  private DateString:String; 
  private stories: Story[];
  private MonthsEnum : String[] = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.ConvertDate();
    this.stories = this.communicationService.GetStoriesByDate(this.date);
    console.log(this.stories);
  }

  private ConvertDate(){
    let DateType: Date;
    DateType = new Date(this.date+" 00:00:00");
    this.DateString =DateType.toString().substring(0,3)+", "+this.MonthsEnum[DateType.getMonth()]+" "+DateType.getDate().toString()+", "+DateType.getFullYear().toString();
  }

}

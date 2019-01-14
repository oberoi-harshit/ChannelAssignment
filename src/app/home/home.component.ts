import { Component, OnInit } from '@angular/core';
import { RetrieveChannelsService } from '../Services/RetriveChannels.service';
import { Story } from 'src/app/Models/story.model';
import { CommunicationService } from '../Services/Communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private dates:string[] 
  constructor(private retrieveChannelsService:RetrieveChannelsService,private communicationService: CommunicationService) {   }

  ngOnInit() {
    this.retrieveStories();    
  }

  retrieveStories()
  {
    this.retrieveChannelsService.getChannelList().subscribe(
      (res:Story[]) => { 
        res.forEach(( value: Story )=>{ this.communicationService.AddStory(value) });
        this.dates = this.communicationService.GetDates();    
       },       
      (error: any) => {console.log(error)}
   );
  }

}

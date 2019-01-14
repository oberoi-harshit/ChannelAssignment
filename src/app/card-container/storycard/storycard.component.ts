import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Story } from 'src/app/Models/story.model';
import { CommunicationService } from 'src/app/Services/Communication.service';

@Component({
  selector: 'app-storycard',
  templateUrl: './storycard.component.html',
  styleUrls: ['./storycard.component.css']
})
export class StorycardComponent implements OnInit {
  @Input('story') story:Story;
  //@ViewChild('instructorImageDiv') instructorImage:ElementRef;

  private title: string;
  private description: string;
  private instructorName: string;
  private instructorPhotoUrl: string;
  private subjectPhotoUrl: string;
  private time: string;

  

  constructor(private renderer: Renderer2,private communicationService:CommunicationService) {
    
   }

  ngOnInit() {
    this.title = this.story.title;
    this.description = this.story.description;
    this.instructorName = this.story.instructorName;
    this.instructorPhotoUrl =  this.story.instructorPhotoUrl;
    this.subjectPhotoUrl = this.story.subjectPhotoUrl;
    this.time = this.communicationService.TimeEnum[ this.story.time.split(' ')[1].substring(0,2)];
    //this.setInstructorImage();
    console.log(this.story);
  }

 

}

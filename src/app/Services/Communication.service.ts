import { Injectable } from "@angular/core";
import { Story } from 'src/app/Models/story.model';


@Injectable()
export class CommunicationService {
    private items: { [index: string]: Story[] } = {};
    public TimeEnum: { [index: string]: string } = {};
    private date:string;
    private dates:string[] = [];
    constructor() {        
        this.fillTimeEnum();
    }

    public AddStory(value: Story)
    {
        this.date = value.time.split(' ')[0];        
        if(!this.items.hasOwnProperty(this.date))
        {
            this.items[this.date] = [];
            this.items[this.date].push(value);
            this.dates.push(this.date);
        }
        else
        {
            this.items[this.date].push(value);
        }        
    }

    public GetDates() {
       return this.dates.sort();
    }  
    
    public GetStoriesByDate(date:string)
    {
        return this.items[date]
        .sort((t1:Story,t2:Story)=>{
           if(t1.time > t2.time) {return 1;}
           if(t1.time < t2.time) {return -1;}
           else return 0;
        });
    }

    private fillTimeEnum()
    {
      this.TimeEnum["00"] = "12:00 AM - 1:00 AM EDT";
      this.TimeEnum["01"] = "1:00 AM - 2:00 AM EDT";
      this.TimeEnum["02"] = "2:00 AM - 3:00 AM EDT";
      this.TimeEnum["03"] = "3:00 AM - 4:00 AM EDT";
      this.TimeEnum["04"] = "4:00 AM - 5:00 AM EDT";
      this.TimeEnum["05"] = "5:00 AM - 6:00 AM EDT";
      this.TimeEnum["06"] = "6:00 AM - 7:00 AM EDT";
      this.TimeEnum["07"] = "7:00 AM - 8:00 AM EDT";
      this.TimeEnum["08"] = "8:00 AM - 9:00 AM EDT";
      this.TimeEnum["09"] = "9:00 AM - 10:00 AM EDT";
      this.TimeEnum["10"] = "10:00 AM - 11:00 AM EDT";
      this.TimeEnum["11"] = "11:00 AM - 12:00 PM EDT";
      this.TimeEnum["12"] = "12:00 PM - 1:00 PM EDT";
      this.TimeEnum["13"] = "1:00 PM - 2:00 PM EDT";
      this.TimeEnum["14"] = "2:00 PM - 3:00 PM EDT";
      this.TimeEnum["15"] = "3:00 PM - 4:00 PM EDT";
      this.TimeEnum["16"] = "4:00 PM - 5:00 PM EDT";
      this.TimeEnum["17"] = "5:00 PM - 6:00 PM EDT";
      this.TimeEnum["18"] = "6:00 PM - 7:00 PM EDT";
      this.TimeEnum["19"] = "7:00 PM - 8:00 PM EDT";
      this.TimeEnum["20"] = "8:00 PM - 9:00 PM EDT";
      this.TimeEnum["21"] = "9:00 PM - 10:00 PM EDT";
      this.TimeEnum["22"] = "10:00 PM - 11:00 PM EDT";
      this.TimeEnum["23"] = "11:00 PM - 12:00 AM EDT";
    }
}
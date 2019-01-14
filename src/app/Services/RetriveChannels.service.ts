import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {map} from 'rxjs/operators';
import { Router } from "@angular/router";
import { Observable, Observer } from 'rxjs' ;
import { Story } from 'src/app/Models/story.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RetrieveChannelsService {
    private filePath: string;
    private stories: Story[];

    constructor(private _http: HttpClient) {        
      this.filePath = '../../assets/channel.json';
    }

    public getChannelList(){        
      return this._http.get(this.filePath);
    }
}
import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  videos=[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getVideos().subscribe((data:any[])=>{
    this.videos=data;
  }    )
  }

}

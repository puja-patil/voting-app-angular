import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-bar-representation',
  templateUrl: './bar-representation.component.html',
  styleUrls: ['./bar-representation.component.css']
})
export class BarRepresentationComponent implements OnInit {
  catVotes: any = 0;
  dogVotes: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cVotes(cvotes) {
    this.catVotes = cvotes;
    this.CalculatePercent(this.catVotes, this.dogVotes);
  }
  dVotes(dVotes) {
    this.dogVotes = dVotes;
    this.CalculatePercent(this.catVotes, this.dogVotes);
  }

  CalculatePercent(catVotes: any, dogVotes: any) {
    console.log(catVotes + "--" + dogVotes);
    var cats = document.getElementById("cats");
    var dogs = document.getElementById("dogs");
    cats.style.width = catVotes / (catVotes + dogVotes) * 100 + '%';
    dogs.style.width = dogVotes / (catVotes + dogVotes) * 100 + '%';
  }

}

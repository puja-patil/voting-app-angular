import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voting-container',
  templateUrl: './voting-container.component.html',
  styleUrls: ['./voting-container.component.css']
})
export class VotingContainerComponent implements OnInit {
  @Output() cVotesVCEmitter = new EventEmitter<any>();
  @Output() dVotesVCEmitter = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  voteForCat() {
    var div = document.getElementById("catVotes");
    let val = Number.parseInt(div.innerHTML) + 1;
    div.innerHTML = val.toString();
    this.cVotesVCEmitter.emit(val);
  }
  voteForDog() {
    var div = document.getElementById("dogVotes");
    let val = Number.parseInt(div.innerHTML) + 1;
    div.innerHTML = val.toString();
    this.dVotesVCEmitter.emit(val);
  }
}

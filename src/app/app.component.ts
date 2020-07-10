import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app';
  voteForCat() {
    var div = document.getElementById("catVotes");
    console.log(div.innerHTML);
    let val = Number.parseInt(div.innerHTML) + 1;
    div.innerHTML = val.toString();
  }
  voteForDog() {
    var div = document.getElementById("dogVotes");
    console.log(div.innerHTML);
    let val = Number.parseInt(div.innerHTML) + 1;
    div.innerHTML = val.toString();
  }
}

import { HttpService } from './services/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('getSchema/1')
      .subscribe((response) => {
        console.log(response); // works here
      });
  }
}

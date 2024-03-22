import { Component, OnInit } from '@angular/core';
import { ObservableServiceService } from '../../services/observable-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _obserServ : ObservableServiceService) { }

  ngOnInit(): void {
    this._obserServ.fetchSkills()
      .subscribe(res => {
        console.log(res);
        
      })
  }

}

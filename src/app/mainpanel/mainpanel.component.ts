import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  displayMonths = 2;
  navigation = 'select';
  constructor() { }

  ngOnInit() {
  }

}

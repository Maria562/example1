import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  categories$: object;
  public isCollapsed = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMenus().subscribe(
      data => this.categories$ = data 
    );
  }

}

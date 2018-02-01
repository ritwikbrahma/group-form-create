import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { employee } from '../employee'
import { InviteService } from '../invite.service'

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employees$: Observable<employee[]>;
  private searchTerms = new Subject<string>();



  constructor(private inviteService: InviteService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  temp: string = null;
  flag: boolean= true;
  selectEmployee(employ:employee): void{
    //this.temp.concat(this.temp,employ.name);
    if(this.flag==true)
    {
      this.temp="";
      this.flag=false;
    }
    
    this.temp =this.temp + employ.name + ";";
    console.log(this.temp);

  }


  ngOnInit(): void {
    this.employees$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.inviteService.inviteEmployees(term)),
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdheader',
  styleUrls: ['./fdheader.component.scss'],
  template: `<h3 [style.fontSize.em]='fontSize'>{{title}}</h3>`
})
export class FdheaderComponent implements OnInit {
@Input() title: string = '';
@Input() fontSize : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

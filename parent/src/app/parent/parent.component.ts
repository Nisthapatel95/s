import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public myinputmessage: string = "i am parent"
  user = ['Nistha' , 'yag']
  constructor() { }

  ngOnInit(): void {
  }

  GetChildData(data:string){
    this.user.push(data)

  }

}

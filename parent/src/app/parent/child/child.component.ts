import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() myinputMsg!: string;
  @Output() myOutput:EventEmitter<string>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinputMsg)
  }
  getdata:any=''

  sendValues(blank:any){
    console.log(blank)
    if(blank){
    this.myOutput.emit(blank)
    }
  }
    
}

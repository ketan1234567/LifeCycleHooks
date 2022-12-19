import { Component, OnChanges,OnInit,DoCheck, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements DoCheck ,OnChanges,OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy '); 
  }

  @Input() inputdata:any
  ngDoCheck(): void {
    console.log('docheck '); 
  }
  ngOnInit(): void {
    console.log('ngOninit ');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
}


}
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMoreComponent implements OnInit {
  @Input() text: string;
  @Input() textLength: number;
  public showMoreText:string;
  public hide:boolean = true;
  public showOnlyText:boolean = false;
  constructor() { }

  ngOnInit() {
    this.showMoreText = this.text;
    this.textLength = this.textLength || 20;
    (this.text.length <= 20 || this.text.length <= this.textLength) ? this.showOnlyText = true : this.toggleLength();
  }
  toggleLength() {
    if(this.text.length > this.textLength && this.hide){
      this.hide=false;
      this.text =this.text.substring(0, this.textLength);
    } else {
      this.hide=true;
      this.text=this.showMoreText;
    }
  } 
}

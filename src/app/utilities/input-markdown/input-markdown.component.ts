import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.css'
})
export class InputMarkdownComponent implements OnInit{

  constructor(){ }

  @Output()
  changeMarkdown = new EventEmitter<string>();


  @Input()
  markdownContent ='';

  @Input()
label= 'Value';

  ngOnInit(): void {
    
  }


}

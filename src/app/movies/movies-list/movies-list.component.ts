import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit{

  constructor (private moviesService: MoviesService){}

  ngOnInit(): void {   
  
  }

@Input()
movies;

@Output()
onDelete = new EventEmitter<void>();

remove(id: number){
  this.moviesService.delete(id).subscribe(()=>{
    this.onDelete.emit();
  })
}

myClickFunction(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Button is clicked");
  console.log(event);
}


}

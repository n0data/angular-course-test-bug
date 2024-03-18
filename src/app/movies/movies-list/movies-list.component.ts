import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit{


  ngOnInit(): void {   
  
  }

@Input()
movies;


remove(index: number){
  this.movies.splice(index,1);
}

myClickFunction(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Button is clicked");
  console.log(event);
}


}

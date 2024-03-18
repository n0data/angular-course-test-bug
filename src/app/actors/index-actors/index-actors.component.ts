import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { actorDTO } from '../actors.models';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrl: './index-actors.component.css'
})
export class IndexActorsComponent implements OnInit{


  constructor(private actorService: ActorsService){

  }

  actors: actorDTO[];
  columnsToDisplay = ['name','actions'];
  totalAmountOfRecords;
  currentPage =1;
  pageSize= 5;


  ngOnInit(): void {

    // this.loadActors();


    this.actorService.get().subscribe((response: HttpResponse<actorDTO[]>) => {
      this.actors = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });


    
    
    // this.actorService.get().subscribe((actors: actorDTO[]) => {
    //   this.actors = actors;
    // });
  }


  // loadActors(){
  //   this.actorService.get().subscribe((actors: any) =>{
  //     this.actors= actors;
  //   });                
  // }



  delete(){
    
  }

}




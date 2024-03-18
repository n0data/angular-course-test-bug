import { Component, OnInit } from '@angular/core';
import { actorCrationDTO } from '../actors.models';
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent implements OnInit{

  constructor (private actorsService: ActorsService, private router: Router){

  }
  
  ngOnInit(): void {

  }

  saveChanges(actorCrationDTO: actorCrationDTO){
    this.actorsService.create(actorCrationDTO).subscribe(()=> {
      this.router.navigate(['/actors']);
    });
  }
  



}

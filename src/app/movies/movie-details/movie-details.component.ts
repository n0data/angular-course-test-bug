import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { movieDTO } from '../movies.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {



  constructor(private moviesService: MoviesService,
    private activatedRoute : ActivatedRoute,
    private sanitizer: DomSanitizer){ }


  movie : movieDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getById(params.id).subscribe(movie =>{
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL= this.generateYoutubeURLForEmbeddedVideo(movie.trailer);

      });
    });

  }



  generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl{
    if (!url){
      return '';
    } 
    // https://www.youtube.com/watch?v=LKFuXETZUsI
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1){
      videoId = videoId.substring(0, ampersandPosition);
    }

     return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, mergeMap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-pages',
  templateUrl: './anime-pages.component.html',
  styleUrls: ['./anime-pages.component.css']
})
export class AnimePagesComponent {
  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private animeService: AnimeService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.animeService.searchAnime(value!))
      ).subscribe((results) => this.animes = results)
  }
}

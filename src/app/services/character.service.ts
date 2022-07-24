import { PaginationService } from './pagination.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  listCharacters$: Subject<any> = new Subject();
  PUBLIC_KEY = '87952e8e5f33d4856e5fefcfad3ac5b2';
  HASH = '16b22cbca93ad3caef1f08f168c32591';
  URL = `http://gateway.marvel.com/v1/public/`;
  filter: string = "";
  limit: number = 10;
  pagination: number = 0;
  constructor(private http: HttpClient, private paginationService: PaginationService) {
    this.paginationService.goSearch$.subscribe((refreshSearch) => this.getPersonagens(refreshSearch))
  }

  getPersonagens(refreshSearch: boolean) {
    this.refreshPagination(refreshSearch);
    const page = this.getPage('characters');
    this.http.get<any>(page).pipe(map((data: any) => data.data)).subscribe(data => {
      if (refreshSearch) { this.refreshSearch(data); }
      this.listCharacters$.next(data.results);
    })
  }
  refreshPagination(refreshSearch:boolean) {
    refreshSearch ? this.pagination = 0 : this.pagination = this.paginationService.getActualPage() * this.limit;
  }
  refreshSearch(data: any) {
    this.paginationService.setTotal(data.total);
  }

  getPage(page: string): string {


    const startWith = this.filter ? "&nameStartsWith=" + this.filter : "";
    return `${this.URL + page}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}${startWith}&limit=${this.limit}&offset=${this.pagination}`;
  }
}

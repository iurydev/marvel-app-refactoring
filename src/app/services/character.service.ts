import { PaginationService } from './pagination.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  map,
  BehaviorSubject,
  Subject,
  firstValueFrom,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  listCharacters$: Subject<any> = new Subject();
  filter: string = '';
  limit: number = 10;
  pagination: number = 0;
  constructor(
    private http: HttpClient,
    private paginationService: PaginationService
  ) {
    this.paginationService.goSearch$.subscribe((refreshSearch) =>
      this.filterHeroes(refreshSearch)
    );
  }

  getPersonagensObs(): Observable<any> {
    const page = this.getPage('characters');
    return this.http.get<any>(page).pipe(
      map((data: any) => {
        // Organizando o array com os personagens (Boas práticas typeScript: Dados fortemente tipados)
        var personagens: Character[] = data.data.results.map(
          (personagem: Character) => {
            return (personagem = new Character().deserialize(personagem));
          }
        );
        console.log('personagens', personagens);
        // this.listCharacters$.next(personagens);
        return personagens;
      })
    );
  }

  async filterHeroes(refreshSearch: boolean) {
    this.refreshPagination(refreshSearch);
    const personagens = await firstValueFrom(this.getPersonagensObs());
    console.log('personagens', personagens);
    this.listCharacters$.next(personagens);
  }

  refreshPagination(refreshSearch: boolean) {
    refreshSearch
      ? (this.pagination = 0)
      : (this.pagination = this.paginationService.getActualPage() * this.limit);
  }

  refreshSearch(data: any) {
    this.paginationService.setTotal(data.total);
  }

  getPage(page: string): string {
    const startWith = this.filter ? '&nameStartsWith=' + this.filter : '';
    return `${environment.apiUrl + page}?${startWith}&limit=${
      this.limit
    }&offset=${this.pagination}`;
  }
}

import { CharacterService } from 'src/app/services/character.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  totalPages$: Subject<number> = new Subject();
  public goSearch$: Subject<boolean> = new Subject();
  private total: number = 0;
  private actualPage: number = 0;
  private limit: number = 10;
  constructor() { }

  setTotal(total: number): void {
    this.total = Math.round(total / this.limit);
    this.actualPage = 0;
    this.totalPages$.next(this.total);
  }

  nextPage() {
    if (this.actualPage + 1 < this.total) {
      this.actualPage += 1;
    }
    this.goSearch$.next(false);
  }

  prevPage() {
    if (this.actualPage - 1 >= 0) {
      this.actualPage -= 1;
    }
    this.goSearch$.next(false);
  }
  getActualPage():number {
    return this.actualPage;
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Injectable({ providedIn: 'root' })
export class ListHeroesResolver implements Resolve<Character[]> {
  constructor(private characterService: CharacterService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Character[]> {
    return this.characterService.getPersonagensObs();
  }
}

// Explicação de uso (Resolver)

// Com a implementação de um resolve para tratar as requisições do
// componente o app se torna mais estável, pois estamos dividindo as
// tarefas para as classes corretas.

// É possível notar que na versão inicial o componente de Herois era
// carregando antes do array estar disponível. Agora isso não
// acontece pois o Angular sabe que deve esperar os Resolvers serem
// executados para então abrir os componentes.

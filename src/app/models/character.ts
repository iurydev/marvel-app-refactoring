import { DeserializableModel } from './deserializable.model';

export class Character implements DeserializableModel {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Appearance;
  series: Appearance;
  stories: Appearance;
  events: Appearance;
  urls: URLCharacter[];

  // Foi removida a lódica do CardComponent para gerar a URL da imagem do personagem.
  // Agora é gerado um método para retornar esse dado, o qual é definido na instancia do objeto.
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  getPhotoUrl() {
    return this.thumbnail.path + '.' + this.thumbnail.extension;
  }
}

interface Thumbnail {
  path: string;
  extension: string;
}
interface Appearance {
  available: number;
  collectionURI: string;
  items: Items[];
  returned: number;
}
interface Items {
  resourceURI: string;
  name: string;
  type?: string;
}
interface URLCharacter {
  type: string;
  url: string;
}

export class Character {
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


  constructor(
    id: number,
    name: string,
    description: string,
    thumbnail: Thumbnail,
    resourceURI: string,
    comics: Appearance,
    series: Appearance,
    stories: Appearance,
    events: Appearance,
    urls: URLCharacter[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.resourceURI = resourceURI;
    this.comics = comics;
    this.series = series;
    this.stories = stories;
    this.events = events;
    this.urls = urls;

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

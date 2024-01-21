import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly GOOGLE_MAPS_API_KEY = 'AIzaSyCvN8N3OCauRFAtCzGE9-ALx8Ra_ISpBNQ';

  readonly GOOGLE_MAPS_OPTIONS: google.maps.MapOptions = {
    center: {
      lat: 44.15746,
      lng: 4.19494,
    },
    zoom: 17,
  };

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//header section
@Component({
  selector: 'header',
  templateUrl: 'app.header.html',
  styleUrl: './app.header.css'
})
export class Header{
  protected readonly title = signal('day3');
}

//card section
@Component({
  selector: 'card',
  templateUrl: 'app.card.html',
  styleUrl: './app.card.css'
})
export class Card{
  protected readonly title = signal('day3');
}

//body section
@Component({
  selector: 'body',
  templateUrl: './app.body.html',
  styleUrl: './app.body.css'
})
export class Body{
  protected readonly title = signal('day3');
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day3');
}

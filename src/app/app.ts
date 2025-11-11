import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

//header section
@Component({
  selector: 'header',
  templateUrl: './app.header.html',
  styleUrl: './app.header.css'
})
export class Header{
  protected readonly title = signal('day3');
}

//card section
@Component({
  selector: 'card',
  templateUrl: './app.card.html',
  styleUrl: './app.card.css'
})
export class Card{
  protected readonly title = signal('day3');
}

//body section
@Component({
  selector: 'body',
  imports: [CommonModule],
  templateUrl: './app.body.html',
  styleUrl: './app.body.css'
})
export class Body implements OnInit {
  protected readonly title = signal('day3');
  protected IsLoggedIn = true;
  protected posts: any[] = [];
  protected loading = false;
  protected error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.error = '';
    
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
          console.log('Posts loaded:', data);
        },
        error: (err) => {
          this.error = 'Failed to load posts';
          this.loading = false;
          console.error('Error:', err);
        }
      });
  }
}

//footer section
@Component({
  selector: 'footer',
  templateUrl: './app.footer.html',
  styleUrl: './app.footer.css'
})
export class Footer{
  protected readonly title = signal('day3')
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Card, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day3');
}

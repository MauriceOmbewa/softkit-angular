import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-body',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.body.html',
  styleUrl: './app.body.css'
})
export class Body implements OnInit {
  protected readonly title = signal('day3');
  protected IsLoggedIn = true;
  protected posts: any[] = [];
  protected loading = false;
  protected error = '';
  protected textColor = 'green';
  protected newPost = { title: '', body: '' };
  protected isSubmitting = false;
  protected sample: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.error = '';
    
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=7')
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

  addPost() {
    if (this.newPost.title.trim()== '' || this.newPost.body.trim() == '') {
      this.error = 'Please fill in both title and body';
      return;
    }


    this.isSubmitting = true;
    this.error = '';

    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {
      title: this.newPost.title,
      body: this.newPost.body,
      userId: 1
    }).subscribe({
      next: (data) => {
        this.sample = data;
        this.posts.unshift(data);
        this.newPost = { title: '', body: '' };
        this.isSubmitting = false;
        console.log('Post added:', data);
      },
      error: (err) => {
        this.error = 'Failed to add post';
        this.isSubmitting = false;
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

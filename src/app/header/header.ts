import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Botswana Missing People</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/add">Add Missing Person</a>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #007bff;
      color: #fff;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      margin-left: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}

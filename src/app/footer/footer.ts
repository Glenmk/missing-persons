import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; 2024 Botswana Missing People. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8f9fa;
      padding: 1rem;
      text-align: center;
      border-top: 1px solid #dee2e6;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}

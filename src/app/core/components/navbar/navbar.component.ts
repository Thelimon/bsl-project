import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .logo {
        margin-left: 2.5rem;
      }
      .menu {
        margin-left: 1rem;
      }
      .icons {
        a {
          padding: 1rem;
          color: #fff;
          i {
            font-weight: 400;
          }
          &:hover {
            transition: 0.3s ease-in;
          }
          &:nth-child(3) {
            margin-right: 2.5rem;
          }
        }
      }
    `,
  ],
})
export class NavbarComponent {
  public isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}

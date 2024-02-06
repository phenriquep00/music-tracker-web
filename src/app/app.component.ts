import { Component, HostBinding, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, SidebarComponent, PlayerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  darkMode = signal<boolean>(
    isPlatformBrowser(this.platformId) ?
      JSON.parse(window.localStorage.getItem('darkMode') ?? 'false') :
      false
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    ) {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      }
    });
  }

  
}

import { Injectable } from '@angular/core';
import { BrowserService } from './browser.service';

export type ThemePref = 'system' | 'light' | 'dark';

/**
 * Light/dark theming. The user picks System / Light / Dark; the choice is
 * persisted in browser.storage.local under "theme". The effective theme is
 * applied by toggling body[data-theme="light"] — dark is the default (no
 * attribute), matching the design's additive light layer in _mist.scss.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private pref: ThemePref = 'system';
  private mq: MediaQueryList | null = null;

  constructor(private _browser: BrowserService) { }

  /** Read the stored preference, wire up the OS listener, and apply. */
  init(): void {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.mq = window.matchMedia('(prefers-color-scheme: light)');
      this.mq.addEventListener('change', () => {
        if (this.pref === 'system') this.apply();
      });
    }
    // Apply the OS preference synchronously (pref defaults to "system") to
    // minimise a dark flash, then correct once the stored preference loads.
    this.apply();
    this._browser.getStorage('theme', (res) => {
      const v = res && res.theme;
      this.pref = (v === 'light' || v === 'dark' || v === 'system') ? v : 'system';
      this.apply();
    });
  }

  get(): ThemePref {
    return this.pref;
  }

  set(pref: ThemePref): void {
    this.pref = pref;
    this._browser.setStorage('theme', pref);
    this.apply();
  }

  /** Resolve "system" against the OS preference. */
  private effective(): 'light' | 'dark' {
    if (this.pref === 'system') return this.mq && this.mq.matches ? 'light' : 'dark';
    return this.pref;
  }

  private apply(): void {
    if (typeof document === 'undefined') return;
    if (this.effective() === 'light') document.body.setAttribute('data-theme', 'light');
    else document.body.removeAttribute('data-theme');
  }
}

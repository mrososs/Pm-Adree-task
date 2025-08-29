import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { InMemoryApiService } from '../assets/mock-api/in-memory-api.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {
        apiBase: 'api',
        delay: 300,
      })
    ),
  ],
};

import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['kk', 'en', 'ru'],
  defaultLocale: 'kk',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

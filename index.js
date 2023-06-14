import {createElement} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App';

hydrateRoot(document, createElement(App));


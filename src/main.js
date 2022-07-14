import './style.css'
import 'flowbite';

import { handleLocation } from './router/router.js';

window.addEventListener('load', () => {
    handleLocation();
});

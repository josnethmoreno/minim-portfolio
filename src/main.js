import './style.css'
import 'flowbite';

import { handleLocation } from './router/router.js';

window.addEventListener('load', () => {
    handleLocation();
});

// DARK MODE
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

let themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);

tabs.show('dashboard');

// get the tab object based on ID
tabs.getTab('contacts')

// get the current active tab object
tabs.getActiveTab()
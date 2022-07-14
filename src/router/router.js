
const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
}

const routes = {
	404: "/src/pages/404.html",
	"/": "src/pages/index.html",
	"/about": "src/pages/about.html",
	"/works": "src/pages/works.html",
	"/contact": "src/pages/contact.html"
};

export const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById('page').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
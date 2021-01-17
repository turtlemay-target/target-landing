addEventListener("DOMContentLoaded", async function _render() {
	const appVersion = await fetchVersionFromJSON(
		"https://raw.githubusercontent.com/turtlemay-target/target-cashier/main/package.json"
	);
	const extVersion = await fetchVersionFromJSON(
		"https://raw.githubusercontent.com/turtlemay-target/turtlemay-target/main/manifest.json"
	);

	const appTextEl = document.querySelector("[data-id='app-version']");
	const extTextEl = document.querySelector("[data-id='ext-version']");

	if (appVersion && appTextEl) appTextEl.value = appVersion;
	if (extVersion && extTextEl) extTextEl.value = extVersion;
});

async function fetchVersionFromJSON(url) {
	let res, json;
	try {
		res = await fetch(url);
		json = await res.json();
	} catch (e) {
		console.error(e);
	}
	return json["version"] ?? null;
}

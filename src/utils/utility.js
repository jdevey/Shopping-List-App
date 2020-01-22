export default function getElementByID(arr, id) {
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i].id == id) {
			return arr[i];
		}
	}
	console.log("WARNING: Failed to get element by ID!!!!", id, arr)
	return null;
}

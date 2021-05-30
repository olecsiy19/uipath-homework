const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const lightenDarkerColor = (color, percent) => {
	let num = parseInt(color.replace("#",""),16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) + amt,
		B = (num >> 8 & 0x00FF) + amt,
		G = (num & 0x0000FF) + amt;
	return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};

export const getPolygonColors = () => {
	const bgColor = getRandomColor()
	return {
		bgColor,
		borderColor: lightenDarkerColor(bgColor, -20)
	}
}


export const getMpBase64 = image => Buffer.from(JSON.stringify({"Mp": Math.floor((image.width * image.height) / 1000000)})).toString("base64")


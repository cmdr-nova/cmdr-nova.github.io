async function readConstant(readableStream) {
	const reader = readableStream.getReader();
	const re = /StreamTitle='(.*)'/;

	while (true) {
		const { done, value } = await reader.read();
		if (done) {break;}

		let cur = new TextDecoder("utf-8").decode(value);
		var fin = re.exec(cur);
		if (!fin) { continue; }

		fin = fin[1].split('\'')[0];
		document.getElementById("player-text").innerHTML = fin;
	}
}


var opts = { headers: {} };
opts["headers"]["Icy-Metadata"] = "1";
let mustr = fetch("https://ice2.somafm.com/deepspaceone-128-mp3", opts)
mustr.then((res) => { readConstant(res.body);})

const audio = document.querySelector('audio');
const volumeSlider = document.getElementById('volume-slider');

volumeSlider.addEventListener('input', (e) => {
audio.volume = e.target.value;
});
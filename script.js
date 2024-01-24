async function getValue() {
    const inputElement = document.getElementById("input");
    const inputValue = inputElement.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const wordElement = document.getElementById("word-h2");
    wordElement.innerHTML = `${data[0].word}`;

    const detailsElement = document.getElementById("details");
    detailsElement.innerHTML = `Synonyms=${data[0].meanings[0].synonyms[0]|| "404"},<p>${data[0].meanings[0].partOfSpeech || ""}</p>
        <p>${data[0].phonetics[1].text || ""}</p>`;

    const wordMeaningElement = document.getElementById("word-meaning");
    wordMeaningElement.innerText = `${data[0].meanings[0].definitions[0].definition||""}`;

    const wordExempleElement = document.getElementById("word-exemple");
    wordExempleElement.innerText = `${data[0].meanings[2].definitions[3].example || ""}`;

    const soundElement = document.getElementById("sound");
    soundElement.src = `${data[0].phonetics[0].audio || ""}`;
  }
  function play() {
    sound.play();
  }
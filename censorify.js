var censorwords=["sad","mad", "bad"];
var customCensoredWords =[];
function censor(inStr) {
	for(idx in censorwords)
	{
		inStr = inStr.replace(customCensoredWords[idx], '****');
	}
	for(idx in customCensoredWords)
	{
		inStr = inStr.replace(customCensoredWords[idx], '****');
	}
	return inStr;
}

function getCensoredWords()
{
	return censoredWords.concat(customCensoredWords);
}

function addCensoredWord(word) {
	customCensoredWords.push(word);
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;
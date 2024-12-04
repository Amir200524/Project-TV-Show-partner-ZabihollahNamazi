//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  let ulList = document.getElementById("ul-list");

  for(let item in episodeList){

    let liList = document.createElement('li');
    ulList.appendChild(liList);
    liList.classList.add("li-list-cls")

    let episodeTitle = document.createElement("h2");
    episodeTitle.innerHTML = episodeList[item].name;
    episodeTitle.classList.add("h2-title-cls");

    let episodePicture = document.createElement("img");
    episodePicture.src = episodeList[item].image.medium;
    episodePicture.classList.add("img-picture-cls");

    let episodeSummary = document.createElement("p");
    episodeSummary.innerHTML = episodeList[item].summary;
    episodeSummary.classList.add("p-summary-cls")

    liList.appendChild(episodeTitle);
    liList.appendChild(episodePicture);
    liList.appendChild(episodeSummary);

  }

  
  

}

window.onload = setup;

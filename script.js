document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  var sub = document.getElementsByClassName("list-container");
  sub[0].addEventListener("submit", event => {
    event.preventDefault();
    const subInputVal = document.getElementsByClassName("favorite-input");
    const subInput = subInputVal[0].value;
    subInputVal.value = "";

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = subInput;
    ul.appendChild(li);
  });


  const toggleDiv = (e) => {
    e.preventDefault();
    const div = document.getElementById("divvy");
    if (div.className === "photo-form-container hidden") {
      div.className = "photo-form-container";
    } else {
      div.className = "photo-form-container hidden";
    }
  };

  const hidden = document.querySelector(".photo-show-button");
  hidden.addEventListener("click", toggleDiv);

  const handlePhotoSubmit = (e) => {
  e.preventDefault();

  const photoUrlInput = document.querySelector(".photo-url-input");
  const photoUrl = photoUrlInput.value;
  photoUrlInput.value = "";

  const newImg = document.createElement("img");
  newImg.src = photoUrl;

  const newPhotoLi = document.createElement("li");
  newPhotoLi.appendChild(newImg);

  const dogPhotosList = document.querySelector(".dog-photos");
  dogPhotosList.appendChild(newPhotoLi);
};

const photoSubmitButton = document.querySelector(".photo-url-submit");
photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});





  // adding SF places as list items

  // --- your code here!



  // adding new photos

  // --- your code here!



});

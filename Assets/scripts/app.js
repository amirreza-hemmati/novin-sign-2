const imageVideoPlayer = document.querySelector(
  ".section-header-holder__image"
);
const videoHolder = document.querySelector(".section-header-holder__video");
const video = document.querySelector(".section-header-holder__video_video");
const videoTime = document.querySelector(".video-time");
const itemList = document.querySelector(".section-main__item-list");

imageVideoPlayer.addEventListener("click", () => {
  imageVideoPlayer.classList.add("d-none");
  videoHolder.classList.remove("d-none");
  video.play();
});

video.addEventListener("timeupdate", () => {
  if (video.duration === video.currentTime) {
    imageVideoPlayer.classList.remove("d-none");
    videoHolder.classList.add("d-none");
  }
});

$(".section-main__tap > button").click(function() {
  if ($(this).hasClass("bg-dolphin text-light")) {
    return;
  }

  $(this)
    .siblings()
    .removeClass("bg-dolphin text-light");
  $(this)
    .siblings()
    .addClass("bg-muted text-dolphin");

  $(this).removeClass("bg-muted text-dolphin");

  $(this).addClass("bg-dolphin text-light");

  const tabIndex = this.getAttribute("data-tab-index");

  for (let index = 0; index < itemList.children.length; index++) {
    if (itemList.children[index].id === tabIndex) {
          $(itemList.children[index])
            .siblings()
            .addClass("d-none");
      $(itemList.children[index]).removeClass("d-none");
    }
  }
});

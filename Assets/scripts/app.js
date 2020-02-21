const imageVideoPlayer = document.querySelector(
  ".section-header-holder__image"
);
const itemList = document.querySelector(".section-main__item-list");

$(".carousel").carousel({
  interval: 2500
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

$(".course-chapter > .card-body").click(function() {
  let timeClick = true;
  if (timeClick) {
    timeClick = false;
    $(this)
      .siblings()
      .slideToggle(400, function() {
        $(this).toggleClass("none-d");
        timeClick = true;
      });

    $(this).toggleClass("card-muted");
    $($($(this).children()[0]).children())
      .last()
      .toggleClass("text-pink");
    // course-chpater__title

    if (
      $(this)
        .siblings()
        .hasClass("none-d")
    ) {
      $($($(this).children()[0]).children())
        .first()
        .text("-");
      return;
    }

    $($($(this).children()[0]).children())
      .first()
      .text("+");
  }
});

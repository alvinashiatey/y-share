function contentMove() {
  function isElementScrolledToBottom(el) {
    if (el.scrollTop >= el.scrollHeight - el.offsetHeight) {
      return true;
    }
    return false;
  }

  function scrollToBottom(el) {
    el.scrollTop = el.scrollHeight;
  }

  const dynamicContainer = document.querySelector(".dynamic__content");

  let atBottom = isElementScrolledToBottom(dynamicContainer);

  if (!atBottom) {
    scrollToBottom(dynamicContainer);
  }
}

function showAddOptions() {
  const add__icon = document.querySelector(".add__icon");
  const post__options = document.querySelector(".post__options");

  add__icon.addEventListener("click", () => {
    post__options.classList.toggle("hide");
  });
}

function showInputContainer() {
  const add__text = document.querySelector(".add__text");
  const add__link = document.querySelector(".add__link");
  const add__image = document.querySelector(".add__image");
  const post__text = document.querySelector(".post__text");

  add__text.addEventListener("click", () => {
    post__text.classList.toggle("hide");
    post__text.firstElementChild.setAttribute("action", "/home?ys_class=text");
  });

  add__link.addEventListener("click", () => {
    post__text.firstElementChild.setAttribute("action", "/home?ys_class=link");
    post__text.classList.toggle("hide");
  });
}

function showContent() {
  const post = document.querySelectorAll(".post");

  post.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("content-reveal");
      el.firstElementChild.classList.toggle("yp_content");
    });
  });
}

function init() {
  contentMove();
  showAddOptions();
  showInputContainer();
  showContent();
}

init();

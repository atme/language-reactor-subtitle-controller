const C = 67;
const V = 86;

const toggleSubtitles = () => {
  const el = document.getElementById("lln-main-subs").style;
  el.display = el.display == "none" ? "flex" : "none";
};

const copySubtitles = async () => {
  const words = document
    .getElementById("lln-subs")
    .getElementsByClassName("lln-word");
  const text = Array.from(words)
    .map((el) => el.innerText)
    .join(" ");
  await navigator.clipboard.writeText(text);
};

window.onload = () => {
  window.onkeydown = (event) => {
    switch (event.keyCode) {
      case C:
        if (event.metaKey || event.ctrlKey) {
          copySubtitles();
        }
        break;
      case V:
        toggleSubtitles();
        break;
    }
  };
};

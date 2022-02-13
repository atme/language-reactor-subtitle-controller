const C = 67;
const V = 86;

const toggleSubtitles = () => {
  const el = document.getElementById("lln-main-subs").style;
  el.display = el.display == "none" ? "flex" : "none";
};

const copySubtitles = () => {
  const text = document
    .getElementById("lln-subs")
    .textContent.replaceAll(".", "")
    .replaceAll("Save", "")
    .trim();
  navigator.clipboard.writeText(text).then(() => {});
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

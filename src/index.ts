document.addEventListener("DOMContentLoaded", () => {
  startApp();
});

function startApp() {
  fixedNavigation();
  createGallery();
  scrollNav();
}

const fixedNavigation = () => {
  const bar = document.querySelector(".header");
  const aboutFestival = document.querySelector("#lineup");
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    if (aboutFestival!.getBoundingClientRect().top < 0) {
      bar!.className =
        "bg-green-300 p-3 header fixed z-50 left-0 top-0 shadow-black shadow-md";
      body?.classList.add("body-scroll");
    } else {
      bar!.className = "bg-green-300 p-3 header ";
      body?.classList.remove("body-scroll");
    }
  });
};

const scrollNav = () => {
  const links = document.querySelectorAll(".navItem");

  links.forEach((link: Element) => {
    link.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const target = e.target as any;
      const sectionScroll = target.attributes.href.value;
      const section = document.querySelector(sectionScroll);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

const createGallery = (): void => {
  const gallery: HTMLUListElement = document.querySelector(".galleryImages")!;

  for (let i = 1; i <= 12; i++) {
    const image: HTMLPictureElement = document.createElement("picture");
    image.innerHTML = `<img width="200" height="300" src="../img/thumb/${i}.jpg"  alt="gallery image">`;
    gallery?.appendChild(image);
    image.onclick = function () {
      showImage(i);
    };
  }
};

const showImage = (id: number): void => {
  const image: HTMLPictureElement = document.createElement("picture");
  image.innerHTML = `<img width="800" height="900" src="../img/grande/${id}.jpg"  alt="gallery image">`;

  const overlay = document.createElement("DIV");
  overlay.appendChild(image);
  overlay.classList.add("overlay");

  const closeModal = document.createElement("P");
  closeModal.textContent = "X";
  closeModal.className =
    "w-[4rem] rounded-full bg-white h-[4rem] text-black grid place-items-center bold hover:cursor-pointer";

  closeModal.onclick = () => {
    body!.className = "font-serif";
    overlay.remove();
  };

  overlay.appendChild(closeModal);
  const body = document.querySelector("body");

  if (overlay) body!.classList.add("overflow-hidden");

  body!.appendChild(overlay);
};

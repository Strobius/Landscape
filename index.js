function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    if (isElementVisible(element)) {
      element.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = Array.from(document.querySelectorAll(".gallery-image"));
  let currentImageIndex = 0;

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeModalBtn = document.querySelector(".close");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function openModal(imgElement) {
    currentImageIndex = galleryImages.findIndex((img) => img === imgElement);

    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modalImg.src = imgElement.src;

    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyNavigation);
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";

    document.removeEventListener("keydown", handleKeyNavigation);
  }

  function handleKeyNavigation(event) {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage();
  }

  function showPrevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
  }

  function updateModalImage() {
    const currentImage = galleryImages[currentImageIndex];
    if (!currentImage) {
      console.error(
        `Не удалось найти изображение с индексом ${currentImageIndex}.`
      );
      return;
    }

    modalImg.src = currentImage.src;
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  closeModalBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  galleryImages.forEach((imgElement) => {
    imgElement.addEventListener("click", () => openModal(imgElement));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const arrow = question.querySelector('.faq-item_arrow');
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      arrow.classList.toggle('open');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
      header.classList.remove("hidden");
    } else {
      header.classList.add("hidden");
    }
    lastScrollY = window.scrollY;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  } 
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('openModalBtn');
  const waveContainer = document.querySelector('.wave-container');
  const footerSection = document.getElementById('footer');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        waveContainer.classList.add('hidden');

      } else {
        waveContainer.classList.remove('hidden');
      }
    });
  });

  observer.observe(footerSection);
});

document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('contact-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  // const waveContainer = document.querySelector('.wave-container');

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";
    waveContainer.classList.add('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = "";
    waveContainer.classList.remove('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = "";
      waveContainer.classList.add('hidden');
    }
  });
});

document.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);



// Featured attractions (first 4)
const featuredAttractions = attractions.slice(0, 4);

// Initialize Swiper for featured carousel
let featuredSwiper;

// Create featured carousel card
function createFeaturedCard(attraction) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const card = document.createElement("div");
  card.className = "featured-card";
  card.onclick = () => openModal(attraction.id);

  const imageContainer = document.createElement("div");
  imageContainer.className = "featured-card-image";

  const img = document.createElement("img");
  img.src = attraction.image;
  img.alt = attraction.name;
  img.loading = "lazy";

  const overlay = document.createElement("div");
  overlay.className = "featured-card-overlay";

  const category = document.createElement("span");
  category.className = "featured-card-category";
  category.textContent = attraction.category;

  overlay.appendChild(category);
  imageContainer.appendChild(img);
  imageContainer.appendChild(overlay);

  const content = document.createElement("div");
  content.className = "featured-card-content";

  const title = document.createElement("h3");
  title.className = "featured-card-title";
  title.textContent = attraction.name;

  const description = document.createElement("p");
  description.className = "featured-card-description";
  description.textContent = attraction.description.substring(0, 150) + "...";

  const details = document.createElement("div");
  details.className = "featured-card-details";

  const locationDetail = document.createElement("div");
  locationDetail.className = "featured-card-detail";
  const locationIcon = document.createElement("i");
  locationIcon.className = "fas fa-map-marker-alt";
  const locationSpan = document.createElement("span");
  locationSpan.textContent = attraction.details.location;
  locationDetail.appendChild(locationIcon);
  locationDetail.appendChild(locationSpan);

  const timingsDetail = document.createElement("div");
  timingsDetail.className = "featured-card-detail";
  const timingsIcon = document.createElement("i");
  timingsIcon.className = "fas fa-clock";
  const timingsSpan = document.createElement("span");
  timingsSpan.textContent = attraction.details.timings.split("(")[0].trim();
  timingsDetail.appendChild(timingsIcon);
  timingsDetail.appendChild(timingsSpan);

  details.appendChild(locationDetail);
  details.appendChild(timingsDetail);

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(details);

  card.appendChild(imageContainer);
  card.appendChild(content);
  slide.appendChild(card);

  return slide;
}

// Create attraction grid card
function createAttractionCard(attraction) {
  const card = document.createElement("div");
  card.className = "attraction-card";
  card.dataset.category = attraction.category;
  card.onclick = () => openModal(attraction.id);

  const imageContainer = document.createElement("div");
  imageContainer.className = "attraction-card-image";

  const img = document.createElement("img");
  img.src = attraction.image;
  img.alt = attraction.name;
  img.loading = "lazy";

  const badge = document.createElement("div");
  badge.className = "attraction-card-badge";
  badge.textContent = attraction.category;

  imageContainer.appendChild(img);
  imageContainer.appendChild(badge);

  const content = document.createElement("div");
  content.className = "attraction-card-content";

  const title = document.createElement("h3");
  title.className = "attraction-card-title";
  title.textContent = attraction.name;

  const description = document.createElement("p");
  description.className = "attraction-card-description";
  description.textContent = attraction.description.substring(0, 120) + "...";

  const footer = document.createElement("div");
  footer.className = "attraction-card-footer";

  const location = document.createElement("div");
  location.className = "attraction-card-location";
  const locationIcon = document.createElement("i");
  locationIcon.className = "fas fa-map-marker-alt";
  const locationSpan = document.createElement("span");
  locationSpan.textContent = attraction.details.location;
  location.appendChild(locationIcon);
  location.appendChild(locationSpan);

  const arrow = document.createElement("div");
  arrow.className = "attraction-card-arrow";
  const arrowIcon = document.createElement("i");
  arrowIcon.className = "fas fa-arrow-right";
  arrow.appendChild(arrowIcon);

  footer.appendChild(location);
  footer.appendChild(arrow);

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(footer);

  card.appendChild(imageContainer);
  card.appendChild(content);

  return card;
}

function preloadImages() {
  attractions.forEach((attraction) => {
    const img = new Image();
    img.src = attraction.image;
  });
}

// Filter functionality
function filterAttractions(category) {
  const cards = document.querySelectorAll(".attraction-card");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Update active filter button
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === category) {
      btn.classList.add("active");
    }
  });

  // Filter cards
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// Helper function to create modal detail item
function createModalDetailItem(iconClass, label, value) {
  const detailItem = document.createElement("div");
  detailItem.className = "modal-detail-item";

  const iconContainer = document.createElement("div");
  iconContainer.className = "modal-detail-icon";
  const icon = document.createElement("i");
  icon.className = iconClass;
  iconContainer.appendChild(icon);

  const content = document.createElement("div");
  content.className = "modal-detail-content";
  const heading = document.createElement("h4");
  heading.textContent = label;
  const paragraph = document.createElement("p");
  paragraph.textContent = value;
  content.appendChild(heading);
  content.appendChild(paragraph);

  detailItem.appendChild(iconContainer);
  detailItem.appendChild(content);

  return detailItem;
}

// Open modal
function openModal(attractionId) {
  const attraction = attractions.find((a) => a.id === attractionId);
  if (!attraction) return;

  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  // Clear previous content
  while (modalBody.firstChild) {
    modalBody.removeChild(modalBody.firstChild);
  }

  // Create image
  const img = document.createElement("img");
  img.src = attraction.image;
  img.alt = attraction.name;
  img.className = "modal-image";
  img.loading = "lazy";

  // Create title
  const title = document.createElement("h2");
  title.className = "modal-title";
  title.textContent = attraction.name;

  // Create category
  const category = document.createElement("span");
  category.className = "modal-category";
  category.textContent = attraction.category;

  // Create description
  const description = document.createElement("p");
  description.className = "modal-description";
  description.textContent = attraction.description;

  // Create details container
  const details = document.createElement("div");
  details.className = "modal-details";

  // Create detail items
  const timingsItem = createModalDetailItem(
    "fas fa-clock",
    "Timings",
    attraction.details.timings
  );
  const entryFeeItem = createModalDetailItem(
    "fas fa-ticket-alt",
    "Entry Fee",
    attraction.details.entryFee
  );
  const bestTimeItem = createModalDetailItem(
    "fas fa-calendar-alt",
    "Best Time",
    attraction.details.bestTime
  );
  const locationItem = createModalDetailItem(
    "fas fa-map-marker-alt",
    "Location",
    attraction.details.location
  );

  details.appendChild(timingsItem);
  details.appendChild(entryFeeItem);
  details.appendChild(bestTimeItem);
  details.appendChild(locationItem);

  // Append all elements to modal body
  modalBody.appendChild(img);
  modalBody.appendChild(title);
  modalBody.appendChild(category);
  modalBody.appendChild(description);
  modalBody.appendChild(details);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Scroll to attractions
function scrollToAttractions() {
  document.getElementById("attractions").scrollIntoView({ behavior: "smooth" });
}

// Mobile menu functions
function openMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  mobileMenu.classList.add("active");
  hamburger.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

// Initialize
function init() {
  // Initialize featured carousel
  const featuredCarousel = document.getElementById("featuredCarousel");
  featuredAttractions.forEach((attraction) => {
    const card = createFeaturedCard(attraction);
    featuredCarousel.appendChild(card);
  });

  featuredSwiper = new Swiper(".featured-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize attractions grid
  const attractionsGrid = document.getElementById("attractionsGrid");
  attractions.forEach((attraction) => {
    const card = createAttractionCard(attraction);
    attractionsGrid.appendChild(card);
  });

  preloadImages();

  // Initialize filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterAttractions(btn.dataset.filter);
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Close modal on outside click
  const modal = document.getElementById("modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Initialize hamburger menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

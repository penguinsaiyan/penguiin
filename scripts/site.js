// Shared helpers used across pages.
//
// The active profile picture is decided entirely by the files: whichever
// photo's filename starts with "active-" (set by you, then re-run
// `node build-manifest.js`). There's no visitor-side override anymore —
// everyone who visits the site sees the same active picture.

/** Returns the manifest entry marked as active, or the most recently added photo as a fallback. */
function getActivePhoto() {
  const manifest = window.PHOTO_MANIFEST || [];
  if (manifest.length === 0) return null;

  const defaultActive = manifest.find((p) => p.defaultActive);
  if (defaultActive) return defaultActive;

  return manifest[manifest.length - 1]; // fall back to most recently added
}

/** Renders the active photo into any element with [data-active-photo]. */
function renderActivePhotoSlots() {
  const photo = getActivePhoto();
  document.querySelectorAll("[data-active-photo]").forEach((el) => {
    if (!photo) return;
    if (el.tagName === "IMG") {
      el.src = photo.file;
      el.alt = el.alt || "Current profile picture";
    }
  });
}

document.addEventListener("DOMContentLoaded", renderActivePhotoSlots);

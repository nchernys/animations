// Ensure jQuery and the Ripples plugin are loaded
(function () {
  if (window.$ && $.fn && $.fn.ripples) {
    console.log("Ripples plugin loaded successfully.");

    // Initialize the ripple effect
    $("#ripple-container").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
      interactive: true,
    });
  } else {
    console.error("Ripples plugin or jQuery not found.");
  }
})();

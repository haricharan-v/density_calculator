function calculateDensity() {
    var mass = parseFloat(document.getElementById("mass").value);
    var volume = parseFloat(document.getElementById("volume").value);

    if (!isNaN(mass) && !isNaN(volume) && volume !== 0) {
      var density = (mass / volume).toFixed(2);
      document.getElementById("density").value = density + "g/cm³";
    } else {
      alert(
        "Please enter valid values for Mass and Volume (Volume should not be zero)."
      );
    }
}
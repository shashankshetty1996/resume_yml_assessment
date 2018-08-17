function main() {
  // display section
  let displaySection = "display-1";

  function setDisplaySection(index) {
    /*
    
    check style
    
    */

    document.getElementsByClassName(displaySection)[0].style.zIndex = index;
  }

  // get all action button
  document.querySelectorAll("[data-target]").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      setDisplaySection(0);
      displaySection = button.getAttribute("data-target");
      setDisplaySection(1);
    });
  });
}

main();

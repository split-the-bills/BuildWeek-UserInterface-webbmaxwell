class Dropdown {
  constructor(element) {

    this.element = element;

    this.button = this.element.querySelector(".dropdown-button");

    this.content = this.element.querySelector(".dropdown-content");

    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  };

  toggleContent(element) {
    this.content.classList.toggle('dropdown-hidden');
  };
};


const dropdowns = document.querySelectorAll('.dropdown-menu').forEach( dropdown => new Dropdown(dropdown));

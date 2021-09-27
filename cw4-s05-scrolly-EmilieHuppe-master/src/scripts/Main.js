import Scrolly from './components/Scrolly';
class Main {
  constructor() {
    this.init();
  }

  init() {

document.documentElement.classList.add('has-js');

    const components = document.querySelectorAll('[data-component]');
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;
      if (componentName == 'Scrolly') {
        new Scrolly(element);
      }
    }
  }
}

new Main();

class TemplateComponent {
  container: HTMLElement;
  isShowing: boolean;
  html: string;
  /*
   *  Constructor
   */
  constructor(className: string | null = null, data: object = {}, containerType: string = 'div') {
    this.container = document.createElement(containerType);
    if (className) this.container.className = className;
    this.isShowing = true;
    this.setHtml(data);
    this.applyTemplate();
  }

  /*
   *  Setup html
   */
  setHtml(data: object) {
    this.html = '';
  }

  show(...args: any) {
    this.container.style.display = '';
    this.isShowing = true;
  }

  hide() {
    this.container.style.display = 'none';
    this.isShowing = false;
  }

  getIsShowing() {
    return this.isShowing;
  }

  /*
   *  Remove from dom
   */
  removeFromDom() {
    if (!this.container.parentNode) return;
    this.container.parentNode.removeChild(this.container);
  }

  /*
   *  Setup template
   */
  applyTemplate(element: HTMLElement | null = null) {
    if (!element) this.container.innerHTML = this.html;

    const elToQuerySelect = element ? element : this.container;
    const propertyElements = Array.from(elToQuerySelect.querySelectorAll('[js]'));

    for (const el of propertyElements) {
      // @ts-ignore
      this[el.getAttribute('js')] = el;
      el.removeAttribute('js');
    }
  }
}

export default TemplateComponent;

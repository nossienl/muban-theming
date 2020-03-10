import AbstractComponent from '../../AbstractComponent';
import Themes from '../../../data/shared-variable/themes.json'

export default class App extends AbstractComponent {
  public static readonly displayName: string = 'muban-options';
  private themeSelect:HTMLSelectElement;
  private gridOverlay:HTMLElement;
  private gridToggle:HTMLInputElement;
  private debugToggle:HTMLInputElement;

  constructor(element: HTMLElement) {
    super(element);
    this.themeSelect = this.getElement('.js-theme-select');
    this.gridOverlay = this.getElement('.js-grid-overlay');
    this.gridToggle= this.getElement('.js-grid-toggle');
    this.debugToggle= this.getElement('.js-debug-toggle');

    // populate the theme dropdown
    this.populateSelect();
    this.addEventListeners();
  }

  private addEventListeners() {
    if( this.themeSelect)  this.themeSelect.addEventListener('change', App.handleThemeSelect.bind(this));
    if(this.gridToggle) this.gridToggle.addEventListener('change', this.handleGridToggle.bind(this));
    if(this.debugToggle) this.debugToggle.addEventListener('change', this.handleDebugToggle.bind(this));
  }

  private populateSelect() {
    const themes = Object.keys(Themes.themes);
    for (const key of themes) {
      let option = document.createElement("OPTION");
        let txt = document.createTextNode(key);
        option.appendChild(txt);
        option.setAttribute("value",`theme-${key}`);
        this.themeSelect.insertBefore(option, this.themeSelect.lastChild);
    }
  }

  private static handleThemeSelect(event:Event) {
    event.preventDefault();

    if(event.target) {
      const theme = <HTMLSelectElement>event.target;
      if(theme.value === 'none') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme.value);
      }
    }
  }

  private handleGridToggle(){
    this.gridToggle.checked ?  this.gridOverlay.classList.add('is-active') :  this.gridOverlay.classList.remove('is-active');
  }

  private handleDebugToggle(){
    this.debugToggle.checked ?
      document.documentElement.setAttribute('data-debug','true') :
      document.documentElement.removeAttribute('data-debug');
  }

  public dispose() {}
}

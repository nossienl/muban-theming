import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import { IMubanTransitionMixin, MubanTransitionVariable } from 'muban-transition-component';
import { ScrollTrackerComponentManager } from 'scroll-tracker-component-manager';

import AbstractComponent from '../../AbstractComponent';

export default class App extends AbstractComponent {
  public static readonly displayName: string = 'app-root';

  public scrollTrackerComponentManager: ScrollTrackerComponentManager<IMubanTransitionMixin> = new ScrollTrackerComponentManager<IMubanTransitionMixin>({
    setDebugLabel: process.env.NODE_ENV === 'development',
    debugBorderColor: 'red',

    inViewProgressEnabled: true,

    scrollThrottle: 100,
    resizeDebounce: 100,
    // When this is enabled you should set the container(body) to a fixed height(100%).
    enableSmoothScroll: false,
    smoothScrollOptions: {
      damping: 0.1,
      alwaysShowTracks: false,
    },
  });

  constructor(element: HTMLElement) {
    super(element);

    // for generic app logic
  }


  /**
   * @public
   * @method allComponentsConstructed
   */
  public adopted(): void {
    this.getElements(`[${MubanTransitionVariable.scrollComponentAttribute}]`).forEach(
      (element: HTMLElement) => {
        this.scrollTrackerComponentManager.addComponentToScrollTracker(<IMubanTransitionMixin>getComponentForElement(element));
      },
    );
  }

  public dispose() {
    // clean up stuff when hot reloading
    if (this.scrollTrackerComponentManager) {
      this.scrollTrackerComponentManager.dispose();
    }
  }
}

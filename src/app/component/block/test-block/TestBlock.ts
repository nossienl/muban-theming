import AbstractTransitionBlock from 'app/component/block/AbstractTransitionBlock';
import TestBlockTransitionController from './TestBlockTransitionController';

export default class TestBlock extends AbstractTransitionBlock {
  public static displayName:string = 'test-block';
  public transitionController:TestBlockTransitionController;

  constructor(el:HTMLElement) {
    super(el);
    this.transitionController = new TestBlockTransitionController(this);
  }
}

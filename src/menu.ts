import { MenuType, Menu, Platform, Animation } from 'ionic-angular';

export class MenuFadeType extends MenuType {
  constructor(menu: Menu, plt: Platform) {
    super(plt);

    menu.swipeEnable(false);
    let menuEl = menu.getMenuElement();

    menu.getNativeElement().style['z-index'] = '80';
    menuEl.style.width = '100%';
    menuEl.style.transform = 'translateX(0px)';

    let menuShow = new Animation(plt, menu.getMenuElement());
    menuShow.fromTo('opacity', '0', 1);

    this.ani.add(menuShow);
  }
}

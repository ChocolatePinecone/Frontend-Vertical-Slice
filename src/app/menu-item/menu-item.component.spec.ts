import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  const testItem = {
    dish: 'Something',
    description: 'Blah blah blah',
    price: '10000,-',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.itemData = testItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render dish, description and price', () => {
    const spans = (fixture.nativeElement as HTMLElement).querySelectorAll('span');

    expect(spans[0].innerText).toEqual(testItem.dish);
    expect(spans[1].innerText).toEqual(testItem.description);
    expect(spans[2].innerText).toEqual('€ ' + testItem.price);
  });
});

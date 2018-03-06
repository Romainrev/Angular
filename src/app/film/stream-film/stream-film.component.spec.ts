import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamFilmComponent } from './stream-film.component';

describe('StreamFilmComponent', () => {
  let component: StreamFilmComponent;
  let fixture: ComponentFixture<StreamFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

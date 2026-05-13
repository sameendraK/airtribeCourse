import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAggregatorComponent } from './news-aggregator.component';

describe('NewsAggregatorComponent', () => {
  let component: NewsAggregatorComponent;
  let fixture: ComponentFixture<NewsAggregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAggregatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

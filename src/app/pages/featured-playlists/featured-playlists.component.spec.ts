import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlaylistsComponent } from './featured-playlists.component';

describe('FeaturedPlaylistsComponent', () => {
  let component: FeaturedPlaylistsComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPlaylistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

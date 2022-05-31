import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcategoryComponent } from './addcategory.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddcategoryComponent', () => {
  let component: AddcategoryComponent;
  let fixture: ComponentFixture<AddcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcategoryComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

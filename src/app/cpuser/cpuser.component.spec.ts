import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpuserComponent } from './cpuser.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CpuserComponent', () => {
  let component: CpuserComponent;
  let fixture: ComponentFixture<CpuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuserComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

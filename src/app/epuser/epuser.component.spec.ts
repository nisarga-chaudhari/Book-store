import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpuserComponent } from './epuser.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('EpuserComponent', () => {
  let component: EpuserComponent;
  let fixture: ComponentFixture<EpuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpuserComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

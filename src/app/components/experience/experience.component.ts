import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() title: string = 'Experiencia';

  workList: WorkModel[] = [];

  constructor(private workListService: WorkListService){ }

  ngOnInit(): void {
    this.getWorkList();
  }


  getWorkList(): void{
    this.workListService.getWorks().subscribe((workList) => { this.workList = workList });
  }
}

// src/app/autonomous-co-pilot/autonomous-co-pilot.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autonomous-co-pilot',
  templateUrl: './autonomous-co-pilot.component.html',
  styleUrls: ['./autonomous-co-pilot.component.scss']
})
export class AutonomousCoPilotComponent implements OnInit {
  autonomousCoPilotData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.autonomousCoPilotData = this.dataService.getAutonomousCoPilotData();
  }

  setActiveStep(step: string) {
    this.autonomousCoPilotData.activeStep = step;
  }

  getDiffText() {
    let diffText = 'diff {\n';
    this.autonomousCoPilotData.diff.comments.forEach((comment: any) => {
      diffText += `  ${comment.type === 'positive' ? '✅' : '❌'} ${comment.text}\n`;
    });
    diffText += '}';
    return diffText;
  }
}
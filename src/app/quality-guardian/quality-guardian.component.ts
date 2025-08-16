// src/app/quality-guardian/quality-guardian.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quality-guardian',
  templateUrl: './quality-guardian.component.html',
  styleUrls: ['./quality-guardian.component.scss']
})
export class QualityGuardianComponent implements OnInit {
  qualityGuardianData: any;
  repoUrl: string = '';
  testTypes = [
    { name: 'Test Scenarios', value: 'scenarios', selected: false },
    { name: 'Unit Test Cases', value: 'unit', selected: false },
    { name: 'Acceptance Test Cases', value: 'acceptance', selected: false },
    { name: 'Automation Test Cases', value: 'automation', selected: false },
    { name: 'Load Test Cases', value: 'load', selected: false }
  ];
  loading = false;
  generated: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.qualityGuardianData = this.dataService.getQualityGuardianData();
  }

  generateAndExecute() {
    if (!this.repoUrl.trim() || !this.testTypes.some(t => t.selected)) {
      alert('Please enter a repository URL and select at least one test type.');
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.generated = true;
      this.loading = false;
    }, 1000); // Simulate API call
  }
}
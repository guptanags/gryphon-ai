// src/app/code-quality-guardian/code-quality-guardian.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-code-quality-guardian',
  templateUrl: './code-quality-guardian.component.html',
  styleUrls: ['./code-quality-guardian.component.scss']
})
export class CodeQualityGuardianComponent implements OnInit {
  codeQualityGuardianData: any;
  settingsData: any; // To access user info from settings

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.codeQualityGuardianData = this.dataService.getCodeQualityGuardianData();
    this.settingsData = this.dataService.getSettingsData(); // For user info in header
  }

  getSeverityClass(severity: string) {
    return {
      'success': severity === 'success',
      'warning': severity === 'warning',
      'error': severity === 'error'
    };
  }

  getSeverityIcon(severity: string) {
    switch (severity) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return '';
    }
  }
}
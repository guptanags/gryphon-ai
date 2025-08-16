// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  codeToDocsData: any;
  qualityGuardianData: any;
  knowledgeBaseData: any;
  autonomousCoPilotData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.codeToDocsData = this.dataService.getCodeToDocsData();
    this.qualityGuardianData = this.dataService.getQualityGuardianData();
    this.knowledgeBaseData = this.dataService.getKnowledgeBaseData();
    this.autonomousCoPilotData = this.dataService.getAutonomousCoPilotData();
  }
}
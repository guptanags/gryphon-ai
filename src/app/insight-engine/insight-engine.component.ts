// src/app/insight-engine/insight-engine.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insight-engine',
  templateUrl: './insight-engine.component.html',
  styleUrls: ['./insight-engine.component.scss']
})
export class InsightEngineComponent implements OnInit {
  insightEngineData = {
    repositories: [
      { name: 'Repo 1', url:"https://confluence1", ingested: true },
      { name: 'Repo 2', url:"https://confluence2",ingested: false }
    ],
    documentationTypes: [
      { name: 'Functional', value: 'functional', selected: false },
      { name: 'Technical', value: 'technical', selected: false }
    ]
  };

  urlsInput: string = '';
  
  generatedDocs: { type: string, url: string }[] = [];
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.insightEngineData = this.dataService.getInsightEngineData();
  }

  toggleDoc(doc: any) {
    doc.selected = !doc.selected;
  }

  generateDocumentation() {
    const urls = this.urlsInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    const selectedTypes = this.insightEngineData.documentationTypes
      .filter(doc => doc.selected)
      .map(doc => doc.value);

    if (urls.length === 0 || selectedTypes.length === 0) {
      alert('Please enter at least one URL and select at least one documentation type.');
      return;
    }

    this.loading = true;
    this.dataService.generateDocumentation(urls, selectedTypes).subscribe(result => {
      this.generatedDocs = result;
      this.loading = false;
    });
  }
}
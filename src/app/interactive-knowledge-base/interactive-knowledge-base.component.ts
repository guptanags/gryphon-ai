// src/app/interactive-knowledge-base/interactive-knowledge-base.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-interactive-knowledge-base',
  templateUrl: './interactive-knowledge-base.component.html',
  styleUrls: ['./interactive-knowledge-base.component.scss']
})
export class InteractiveKnowledgeBaseComponent implements OnInit {
  interactiveKnowledgeBaseData: any;
  userQuestion: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.interactiveKnowledgeBaseData = this.dataService.getInteractiveKnowledgeBaseData();
  }

  handleOption(option: string, code: string) {
    console.log(`Selected ${option} for: ${code}`);
    // Add logic for viewing source or docs (e.g., open modal or navigate)
    alert(`You selected ${option} for the code snippet!`);
  }

  sendQuestion() {
    if (this.userQuestion.trim()) {
      console.log('Question sent:', this.userQuestion);
      alert(`Question sent: ${this.userQuestion}`);
      this.userQuestion = ''; // Clear input after sending
    }
  }
}
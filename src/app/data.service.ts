// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Existing methods from previous dashboards
  getCodeToDocsData() {
    return {
      codeSnippets: [
        `automatically document ( { foo: 'bar', algo: 'complex' } )`,
        `public int calculate(int a, int b) { return a + b; }`,
        `puggets ( { built: deploy: fast } )`,
        `const greet = (name) => console.log(\`Hello, \${name}!\`);`
      ]
    };
  }

  getQualityGuardianData() {
    return {
      passPercentage: 85,
      passRate: 92,
      passed: 145,
      failed: 12,
      skipped: 3,
      recentRuns: [
        { name: '2024-03-08', status: 'Passed', count: 5 },
        { name: '2024-03-07', status: 'Failed', count: 5 },
        { name: '2024-03-07', status: 'Failed', count: 4 },
        { name: '2024-03-07', status: 'Failed', count: 4 }
      ],
      testSuiteDetails: [
        { name: 'Authentication_Module', tests: [
          { name: 'Test_Login_Success', status: 'Passed' },
          { name: 'Test_Login_InvalidCredentials', status: 'Failed' },
          { name: 'Test_Logout_Functionality', status: 'Passed' }
        ]}
      ],
      generatedTest: `test_Login_Success() {
        // Generated Test
        const { username, password } = { username: 'test', password: 'test' };
        expect(true).toBe(true);
      }`
    };
  }

  getInsightEngineData() {
    return {
      repositories: [
        { name: 'my-codebase', ingested: true }
      ],
      documentationTypes: [
        { name: 'Functional Documentation', selected: false },
        { name: 'Technical Documentation', selected: false }
      ]
    };
  }

  // New method for Interactive Knowledge Base
  getInteractiveKnowledgeBaseData() {
    return {
      question: 'A new scorecard "ABC" with RAI Key 6789 needs to be introduced in the system. What are the steps to implement this?',
      aiResponse: {
        text: 'Al Responds:',
        codeSnippets: [
          {
            code: `java!! /// *scorecard();
                  updateList("
                  scorecard"+/*=/ABC*/;
                  *//*: Scorecard-"ABC" = ABC.add();{
                  duha,/* 
                  JavaScript_js=scorecard() {
                    <script...>
                  }*add();}`,
            options: ['View Source', 'View Docs']
          },
          {
            code: `test_on: scorecard()();{
                  add();
                  // Add scorecard "ABC" with RAI Key 6789 
                  scorecard = "ABC";}`,
            options: ['View Source', 'View Docs']
          },
          {
            code: `python
                  def add_scorecard(scorecard_name, rai_key):
                      # Add scorecard "ABC" with RAI Key 6789
                      scorecard = scorecard_name
                      rai_key = rai_key
                      return scorecard, rai_key`,
            options: ['View Source', 'View Docs']
          }
        ]
      }
    };
  }

  getAutonomousCoPilotData() {
    return {
      features: [
        { name: 'Generate Boilerplate', enabled: true },
        { name: 'Refactor Function', enabled: false },
        { name: 'Suggest Reviewers', enabled: true }
      ],
      featureRequest: '',
      activeStep: 'Automated Workflow',
      diff: {
        comments: [
          { text: 'Potential performance improvement: consider caching', type: 'positive' },
          { text: 'Conflicting comments:', type: 'negative' },
          { text: 'Code style violation: indent with 4 spaces', type: 'positive' }
        ]
      },
      pullRequest: {
        title: 'Describe your feature request: {feature: "scorecard"} (add new scorecard)',
        reviewers: '',
        issues: 'Linked issues: CROCR-11111 - A new scorecard "ABC" with RAI Key 6789 needs to be introduced in the system. '
      }
    };
  }

  getSettingsData() {
    return {
      preferences: [
        { name: 'Dark Theme', enabled: true },
        { name: 'Auto-Save', enabled: false },
        { name: 'Notifications', enabled: true }
      ],
      user: {
        name: 'User',
        email: 'user@example.com'
      }
    };
  }

  getKnowledgeBaseData() {
    return {
      ragQa: {
        question: 'Find the latest documentation for the "Autonomous CoPilot" feature.',
        response: 'https://swiki/autonomous-co-pilot/latest-docs',
      }
    };
  }

  getCodeQualityGuardianData() {
    return {
      metrics: {
        codeCoverage: 85,
        complexityScore: 7.5,
        lintingErrors: 3,
        totalFiles: 50
      },
      insights: [
        { message: 'High complexity detected in file: main.js', severity: 'warning' },
        { message: 'Linting error: Missing semicolon in line 42', severity: 'error' },
        { message: 'Good coverage: 85% of code tested', severity: 'success' }
      ],
      recentScans: [
        { date: '2025-08-14', status: 'Completed', duration: '2m 30s' },
        { date: '2025-08-13', status: 'Failed', duration: '1m 45s' }
      ]
    };
  }

  generateDocumentation(urls: string[], types: string[]): Observable<{ type: string, url: string }[]> {
    // Simulate server processing and response
    const docs: { type: string, url: string }[] = [];
    urls.forEach((url, i) => {
      types.forEach(type => {
        docs.push({
          type,
          url: `${url}/generated-${type}-doc-${i + 1}`
        });
      });
    });
    // Simulate network delay
    return of(docs).pipe(delay(1000));
  }
}
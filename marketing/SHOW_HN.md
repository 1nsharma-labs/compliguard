# Show HN: CompliGuard – Open-source continuous SOC 2 & ISO 27001 evidence engine

Title: Show HN: CompliGuard – Open-source SOC 2 & ISO 27001 continuous evidence engine

Repo: https://github.com/1nsharma-labs/compliguard

Hey HN,

Every B2B startup needs SOC 2 Type II or ISO 27001 to close enterprise customers.

Proprietary compliance platforms (Vanta, Drata, Sprinto) charge $15,000–$35,000/year just to connect read-only to your cloud and take screenshots.

We built **CompliGuard** (https://github.com/1nsharma-labs/compliguard): an open-source, developer-first compliance engine that runs automated Policy-as-Code audits directly in your terminal and CI/CD pipelines.

Key Features:
- Automated SOC 2 Trust Services Criteria checks across AWS, GCP, and GitHub
- Standalone visual auditor-ready HTML report
- Continuous immutable JSON evidence ledger export for CPA audit firms
- 100% self-hosted on your own infrastructure

Core is Apache 2.0.

Run it in 30 seconds:
$ npx compliguard audit

Feedback and contributions welcome!

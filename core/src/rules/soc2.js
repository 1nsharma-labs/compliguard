/**
 * CompliGuard SOC 2 Type II & ISO 27001 Trust Services Criteria Rules Catalog
 */

export const COMPLIANCE_FRAMEWORKS = {
  SOC2: {
    name: 'SOC 2 Type II',
    categories: ['Security', 'Availability', 'Confidentiality']
  },
  ISO27001: {
    name: 'ISO/IEC 27001:2022',
    categories: ['Annex A.5', 'Annex A.8']
  }
};

export const STANDARD_RULES = [
  {
    id: 'SEC-001',
    framework: 'SOC 2',
    control: 'CC6.1',
    title: 'MFA Enforced on Cloud Root & Admin Accounts',
    severity: 'CRITICAL',
    description: 'Ensure Multi-Factor Authentication is active for all root and privileged administrative accounts.',
    remediation: 'Enable virtual or hardware MFA tokens on root and IAM administrators.'
  },
  {
    id: 'SEC-002',
    framework: 'SOC 2',
    control: 'CC6.1',
    title: 'No Root Access Keys Present',
    severity: 'CRITICAL',
    description: 'The root account must not have active programmatic access keys generated.',
    remediation: 'Delete root account access keys immediately and use IAM roles.'
  },
  {
    id: 'SEC-003',
    framework: 'SOC 2',
    control: 'CC6.6',
    title: 'S3 Buckets Block Public Access Enabled',
    severity: 'HIGH',
    description: 'All object storage buckets must strictly block public ACLs and bucket policies by default.',
    remediation: 'Enable S3 Block Public Access at the account and bucket level.'
  },
  {
    id: 'SEC-004',
    framework: 'SOC 2',
    control: 'CC6.6',
    title: 'Storage Encryption by Default (EBS/KMS)',
    severity: 'HIGH',
    description: 'All block storage volumes and database disks must be encrypted with AES-256 or KMS keys.',
    remediation: 'Enable default EBS encryption in the target AWS/GCP region.'
  },
  {
    id: 'SEC-005',
    framework: 'SOC 2',
    control: 'CC7.1',
    title: 'GitHub Branch Protection & Mandatory PR Reviews',
    severity: 'HIGH',
    description: 'The primary production branch (main/master) must require pull request reviews before merging.',
    remediation: 'Configure branch protection rule: Require at least 1 approving review and enforce branch protection on administrators.'
  },
  {
    id: 'SEC-006',
    framework: 'SOC 2',
    control: 'CC7.1',
    title: 'Secret Scanning & Vulnerability Alerts Enabled',
    severity: 'MEDIUM',
    description: 'Code repositories must have automated secret scanning and Dependabot/Snyk security scanning active.',
    remediation: 'Enable Secret Scanning and Push Protection in repository security settings.'
  },
  {
    id: 'SEC-007',
    framework: 'SOC 2',
    control: 'CC7.2',
    title: 'Cloud Audit Logging (CloudTrail / Cloud Audit Logs)',
    severity: 'HIGH',
    description: 'Management event logging must be configured and continuously streaming to an immutable bucket.',
    remediation: 'Create a multi-region CloudTrail trail with log file validation enabled.'
  }
];

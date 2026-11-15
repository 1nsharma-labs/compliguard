#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ComplianceEngine } from './scanner/engine.js';
import { generateComplianceReport } from './report/html.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI Terminal Colors
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  dim: '\x1b[2m'
};

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'audit';

  console.log(`
${C.bold}${C.blue}🛡️ CompliGuard v1.0.0${C.reset} ${C.dim}- Open-Source SOC 2 & ISO 27001 Evidence Engine${C.reset}
${C.dim}Organization: 1nsharma-labs | https://github.com/1nsharma-labs/compliguard${C.reset}
`);

  if (command === 'help' || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  // 1. Audit Command
  if (command === 'audit') {
    console.log(`${C.cyan}🔍 Running automated SOC 2 Type II & ISO 27001 Policy-as-Code checks...${C.reset}\n`);

    const engine = new ComplianceEngine();
    const audit = await engine.runAudit();

    console.log(`${C.bold}=== CompliGuard Audit Summary ===${C.reset}`);
    console.log(`Target:               ${audit.organization}`);
    console.log(`Framework:            ${C.bold}${audit.framework}${C.reset}`);
    console.log(`Compliance Score:     ${audit.summary.score >= 80 ? C.green : C.yellow}${C.bold}${audit.summary.score}%${C.reset} (${audit.summary.readinessStatus})`);
    console.log(`Checks Passed:        ${C.green}${C.bold}${audit.summary.passed} / ${audit.summary.totalChecks}${C.reset}`);
    console.log(`Checks Requiring Fix: ${audit.summary.failed > 0 ? C.red : C.green}${C.bold}${audit.summary.failed}${C.reset}\n`);

    console.log(`${C.bold}Control Evaluation Checklist:${C.reset}`);
    for (const c of audit.checks) {
      const statusTag = c.status === 'PASS' 
        ? `${C.green}[PASS]${C.reset}` 
        : `${C.red}[FAIL]${C.reset}`;
      console.log(`  ${statusTag} ${C.bold}${c.control} (${c.id})${C.reset}: ${c.title}`);
      console.log(`         ${C.dim}Evidence: ${c.evidence}${C.reset}`);
      if (c.status === 'FAIL') {
        console.log(`         ${C.yellow}Fix: ${c.remediation}${C.reset}`);
      }
    }

    // Auto-generate HTML report
    const html = generateComplianceReport(audit);
    const htmlPath = path.resolve(process.cwd(), 'compliguard-soc2-report.html');
    fs.writeFileSync(htmlPath, html, 'utf-8');
    console.log(`\n${C.green}✔ Standalone Auditor-Ready Report generated:${C.reset} ${htmlPath}`);

    // Auto-generate JSON evidence ledger
    const jsonPath = path.resolve(process.cwd(), 'compliguard-evidence.json');
    fs.writeFileSync(jsonPath, JSON.stringify(audit, null, 2), 'utf-8');
    console.log(`${C.green}✔ JSON Evidence Package exported:${C.reset} ${jsonPath}\n`);
    return;
  }

  // 2. Export Command
  if (command === 'export') {
    const engine = new ComplianceEngine();
    const audit = await engine.runAudit();
    const jsonPath = path.resolve(process.cwd(), 'compliguard-evidence.json');
    fs.writeFileSync(jsonPath, JSON.stringify(audit, null, 2), 'utf-8');
    console.log(`${C.green}✔ Exported JSON evidence ledger to:${C.reset} ${jsonPath}`);
    return;
  }

  console.log(`Unknown command: ${command}`);
  printHelp();
}

function printHelp() {
  console.log(`
Usage: compliguard <command> [options]

Commands:
  audit              Run automated compliance scan, display CLI summary & generate HTML report
  report             Generate executive visual compliance report (compliguard-soc2-report.html)
  export             Export immutable JSON evidence package for external CPA auditors

Options:
  --help             Show help documentation
  --version          Show CLI version
`);
}

main().catch(err => {
  console.error('CompliGuard Error:', err);
  process.exit(1);
});

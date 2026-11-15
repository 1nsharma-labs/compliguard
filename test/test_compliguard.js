import assert from 'node:assert';

import { ComplianceEngine } from '../core/src/scanner/engine.js';
import { generateComplianceReport } from '../core/src/report/html.js';
import { CompliGuardLicenseVerifier } from '../ee/license/verifier.js';

console.log('🧪 Starting CompliGuard Automated Test Suite...\n');

// 1. Engine Test
console.log('Test 1: Policy-as-Code Compliance Engine');
const engine = new ComplianceEngine();
const audit = await engine.runAudit();

assert.strictEqual(audit.organization, '1nsharma-labs');
assert.ok(audit.summary.score >= 0 && audit.summary.score <= 100, 'Score must be 0-100%');
assert.ok(audit.summary.totalChecks > 5, 'Must evaluate standard controls');
assert.ok(audit.summary.passed > 0, 'Must have passing controls');
console.log('  ✅ Compliance Score:', audit.summary.score + '% (' + audit.summary.readinessStatus + ')');
console.log('  ✅ Passed Checks:', audit.summary.passed + ' / ' + audit.summary.totalChecks);

// 2. HTML Report Generator Test
console.log('\nTest 2: Auditor-Ready HTML Report Generator');
const html = generateComplianceReport(audit);
assert.ok(html.includes('CompliGuard Evidence Report'), 'Must include header title');
assert.ok(html.includes('Continuous Evidence Ledger'), 'Must include evidence ledger');
assert.ok(html.includes(String(audit.summary.score)), 'Must render score');
console.log('  ✅ Auditor HTML Report generated successfully (' + html.length + ' bytes)');

// 3. Enterprise License Verifier Test
console.log('\nTest 3: Offline BSL 1.1 License Verifier');
const verifier = new CompliGuardLicenseVerifier('test-compliguard-secret');
const key = verifier.generateKey('ScaleUpFintech', 90, 'ENT');
const verified = verifier.verifyKey(key);
assert.strictEqual(verified.valid, true);
assert.strictEqual(verified.tier, 'ENTERPRISE');
assert.strictEqual(verified.organization, 'SCALEUPFINTECH');
console.log('  ✅ Offline Enterprise License verified:', key);

console.log('\n🎉 ALL COMPLIGUARD TESTS PASSED SUCCESSFULLY!\n');
process.exit(0);

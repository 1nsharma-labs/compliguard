/**
 * CompliGuard Auditor-Ready HTML Report Generator
 */

export function generateComplianceReport(audit) {
  const sum = audit.summary;

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CompliGuard | SOC 2 Type II Compliance Evidence Report</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body { background-color: #0b0f17; color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    .glass { background: rgba(17, 24, 39, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
  </style>
</head>
<body class="min-h-screen p-4 md:p-8">

  <!-- Header -->
  <header class="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-between gap-4 glass rounded-2xl p-6">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/30">
        <i class="fa-solid fa-certificate"></i>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-2xl font-bold tracking-tight text-white">CompliGuard Evidence Report</h1>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30">${audit.framework}</span>
        </div>
        <p class="text-xs text-gray-400">${audit.organization} &bull; Auditor Evidence Ledger &bull; ${new Date(audit.auditedAt).toLocaleString()}</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://github.com/1nsharma-labs/compliguard" target="_blank" class="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 border border-gray-700 transition flex items-center gap-2">
        <i class="fa-brands fa-github text-sm"></i> GitHub
      </a>
    </div>
  </header>

  <main class="max-w-6xl mx-auto space-y-6">

    <!-- KPI Summary Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <div class="glass p-6 rounded-2xl">
        <div class="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">Readiness Score</div>
        <div class="text-4xl font-extrabold text-blue-400">${sum.score}%</div>
        <p class="text-xs text-gray-400 mt-2">${sum.readinessStatus}</p>
      </div>

      <div class="glass p-6 rounded-2xl">
        <div class="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">Passing Controls</div>
        <div class="text-4xl font-extrabold text-emerald-400">${sum.passed}</div>
        <p class="text-xs text-gray-400 mt-2">Verified automated proof</p>
      </div>

      <div class="glass p-6 rounded-2xl">
        <div class="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">Remediation Needed</div>
        <div class="text-4xl font-extrabold text-rose-500">${sum.failed}</div>
        <p class="text-xs text-gray-400 mt-2">Failing controls to fix</p>
      </div>

      <div class="glass p-6 rounded-2xl">
        <div class="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">Total Monitored</div>
        <div class="text-4xl font-extrabold text-white">${sum.totalChecks}</div>
        <p class="text-xs text-gray-400 mt-2">SOC 2 Trust Services Criteria</p>
      </div>

    </div>

    <!-- Controls Evidence Ledger -->
    <div class="glass p-6 rounded-2xl">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-list-check text-blue-400"></i> Continuous Evidence Ledger
        </h2>
        <span class="text-xs text-gray-400 font-mono">Auditor-Ready Proof</span>
      </div>

      <div class="space-y-3">
        ${audit.checks.map(c => `
          <div class="p-4 rounded-xl border ${c.status === 'PASS' ? 'bg-gray-900/60 border-emerald-500/20' : 'bg-rose-950/20 border-rose-500/30'} flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-bold">${c.control}</span>
                <span class="font-mono text-xs text-gray-400">${c.id}</span>
                <h3 class="font-semibold text-sm text-white">${c.title}</h3>
              </div>
              <p class="text-xs text-gray-400 font-mono">${c.evidence}</p>
              ${c.status === 'FAIL' ? `
                <div class="text-xs text-amber-400 flex items-center gap-1 mt-1">
                  <i class="fa-solid fa-wrench"></i> <span>Remediation: ${c.remediation}</span>
                </div>
              ` : ''}
            </div>

            <div class="shrink-0">
              <span class="px-3 py-1 rounded-full text-xs font-bold ${c.status === 'PASS' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}">
                ${c.status}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

  </main>
</body>
</html>`;
}

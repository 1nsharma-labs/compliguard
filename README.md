<p align="center">
  <img src="https://raw.githubusercontent.com/1nsharma-labs/compliguard/main/ui/logo.png" alt="CompliGuard Logo" width="100" onerror="this.style.display='none'"/>
</p>

<h1 align="center">🛡️ CompliGuard</h1>

<p align="center">
  <b>The Open-Source Continuous SOC 2 & ISO 27001 Evidence Engine</b><br>
  Stop paying \$25,000/year to compliance SaaS vendors. Automate Policy-as-Code checks across AWS, GCP, and GitHub, collect continuous auditor proof, and export auditor-ready reports in 30 seconds.
</p>

<p align="center">
  <a href="https://github.com/1nsharma-labs/compliguard/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
  <a href="https://github.com/1nsharma-labs/compliguard/blob/main/ee/LICENSE-EE"><img src="https://img.shields.io/badge/EE_License-BSL_1.1-purple.svg" alt="EE License"></a>
  <a href="https://github.com/sponsors/1nsharma"><img src="https://img.shields.io/badge/Sponsor-GitHub_Sponsors-pink.svg" alt="Sponsor"></a>
</p>

---

## ⚡ What is CompliGuard?

Every B2B startup needs **SOC 2 Type II or ISO 27001** to close six-figure enterprise contracts.

Proprietary compliance tools (Vanta, Drata, Sprinto) charge **\$15,000 to \$35,000 per year** just to connect read-only to your cloud and take screenshots.

**CompliGuard** is an open-source, developer-first compliance engine that runs automated Policy-as-Code audits directly in your CI/CD pipelines and terminal:
1. **Cloud Security Controls:** Verifies MFA on root, S3 block public access, default EBS encryption, and CloudTrail logging.
2. **GitHub Governance:** Audits branch protections, peer review enforcement, and secret scanning.
3. **Auditor-Ready Reports:** Exports standalone HTML evidence reports and structured JSON packages ready for CPA audit firms.

---

## 🚀 Quick Start (30 Seconds)

### Run via npx / Node.js

```bash
# Run automated compliance scan & generate evidence
npx compliguard audit

# Export JSON evidence package for external auditor
npx compliguard export
```

### Run via Docker

```bash
docker run --rm 1nsharma-labs/compliguard:latest audit
```

---

## 💻 CLI Commands

```bash
compliguard audit     # Run full SOC 2 & ISO 27001 evaluation & output terminal summary
compliguard report    # Generate standalone visual compliguard-soc2-report.html
compliguard export    # Generate structured JSON evidence ledger (compliguard-evidence.json)
```

---

## 💼 Dual Licensing & Open-Core Model

* **Community Engine (`/core`):** 100% Free under **Apache License 2.0**.
* **Enterprise Edition (`/ee`):** Licensed under **Business Source License (BSL 1.1)** for continuous monitoring daemons, dedicated auditor portals, and vendor risk assessments.

See [PRICING.md](PRICING.md) for full details.

---

## 🤝 Sponsoring & Community

* **GitHub Sponsors:** [github.com/sponsors/1nsharma](https://github.com/sponsors/1nsharma)
* **Maintained by:** [1nsharma-labs](https://github.com/1nsharma-labs)

---

## 🌐 The 1nsharma-labs Open-Source Suite

Explore our interconnected developer tools to slash costs and automate governance:
* 🛡️ [**TokenArmor**](https://github.com/1nsharma-labs/tokenarmor): AI Gateway & Token FinOps Firewall.
* 🍃 [**CloudPrune**](https://github.com/1nsharma-labs/cloudprune): AWS & GCP Cloud Waste & Zombie Resource Killer.
* 🔒 [**CompliGuard**](https://github.com/1nsharma-labs/compliguard): Continuous SOC 2 & ISO 27001 Evidence Engine.
* 🔑 [**SecretArmor**](https://github.com/1nsharma-labs/secretarmor): Zero-Trust Secret Sprawl & API Key Leak Firewall.
* ☸️ [**KubePrune**](https://github.com/1nsharma-labs/kubeprune): Kubernetes Over-Provisioning & Pod Waste Killer.
* 🏗️ [**DriftArmor**](https://github.com/1nsharma-labs/driftarmor): Terraform Drift Detector & Cloud Cost Firewall.

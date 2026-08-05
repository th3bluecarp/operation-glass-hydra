# Operation Glass Hydra — Golden Answer Key

Initial access uses the invoice/helpdesk social-engineering thread and lookalike Microsoft authentication infrastructure. Identity, VPN, browser, and endpoint records place the attacker in the `j.duran`/IT-administration path. On `WIN-ITADMIN-03`, process and registry evidence establishes execution, credential access, and persistence; a suspicious registry value alone is not enough without the matching process timeline.

The actor pivots to `WIN-FS02` using the affected administrative context, stages Q1 finance, executive notes, and customer MSA material, and creates the recovery note as destructive/ransomware-style cover. The staged ZIPs are valid archives and demonstrate collection, while SMB, proxy, firewall, and netflow records determine what was moved. Cloud/Kubernetes and application audit evidence must separately prove access to backup, database, or production secrets; the mere presence of a secrets listing is exposure, not proof every secret was used.

The authorized AnyDesk case and red-team maintenance window are benign unless their exact timestamps/principals overlap unapproved execution. The prior MFA-proxy exception explains some identity behavior and must not be converted into compromise by itself. Lookalike domains, YARA hits, and passive DNS are corroboration rather than standalone execution evidence.

Containment: revoke affected sessions, rotate administrative/service and exposed application secrets, isolate Windows staging hosts, remove persistence, disable external infrastructure, scope archived files and database queries, validate ESXi/build-host access, and preserve the authorized-maintenance records as false-signal evidence.

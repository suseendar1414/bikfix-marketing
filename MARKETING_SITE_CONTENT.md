# BIKFix — Marketing Site Content

Use this file as the single source of truth for all marketing copy: website, App Store listing, LinkedIn posts, emails, everything.

---

## The Tagline

**BIKFix — One calculation. Always right.**

---

## What BIKFix Does (One Sentence)

When a UK employee cancels a benefit mid-year, BIKFix calculates the exact prorated Benefits-in-Kind value and syncs it to Xero payroll in under 10 seconds.

---

## Our Philosophy

### "We do one thing. We do it right."

BIKFix is not a payroll suite. It's not an HR platform. It's not trying to replace your accountant.

It does one thing: calculate the correct prorated BIK when a benefit is cancelled. That's it.

We built BIKFix because this one small calculation causes hours of wasted time, hundreds of pounds in overpaid tax, and endless HMRC phone calls — all because no tool gets it right.

So we made one that does.

### "The calculation must be right every single time."

Trust is the product. If a payroll admin checks our number against HMRC guidance, it must match. No approximations. No "close enough." Every benefit type, every edge case, every time.

We test every calculation against published HMRC examples. 95 automated tests run on every code change. If our number doesn't match HMRC, we don't ship.

Payroll is not a place for guesswork. People's take-home pay depends on this.

---

## The Problem

### What happens when an employee cancels a benefit?

An employee joins the company in April with private medical insurance. In October, they cancel it. The payroll admin now needs to:

1. Figure out the prorated BIK value for the 6 months they had the benefit
2. Update Xero payroll with the corrected figure
3. Make sure the employee's tax code reflects the change

### What actually happens?

The admin doesn't know the proration rules. Xero doesn't calculate it. There's no tool that does it.

So they Google it. They find HMRC guidance that's 47 pages long. They try to work it out on a spreadsheet. They're not sure if they should prorate by days or tax months. They don't know the fuel benefit all-or-nothing rule. They've never heard of OpRA.

**Result:** Nothing gets updated. The employee's tax code stays wrong. They overpay £50-500 per month in tax. For months.

Eventually someone notices. The admin spends 4-6 hours on hold with HMRC trying to fix it. HMRC says they need to recalculate from scratch. It takes a full day.

**This happens across 15+ benefit types, in thousands of UK companies, every single month.**

### The real cost

| What Goes Wrong | Cost |
|----------------|------|
| Employee overpays tax for 3-6 months | £150 - £3,000 per employee |
| Admin time Googling proration rules | 1-2 hours per cancellation |
| HMRC phone call to correct errors | 4-6 hours on hold |
| Incorrect P11D filing penalties | Up to £3,000 per form |
| Employee trust damaged | Priceless |

---

## The Solution

### BIKFix fixes this in 10 seconds.

```
Open BIKFix inside Xero
  → Select the employee (pulled from your Xero payroll)
  → Pick the benefit type
  → Enter the cancellation date
  → BIKFix calculates the exact prorated BIK
  → One click syncs it back to Xero payroll
  → Done.
```

No Googling. No spreadsheets. No HMRC phone calls. No guessing.

The admin enters what they know (employee, benefit, date). BIKFix handles what they don't (HMRC rules, proration formulas, edge cases).

---

## What You Get

### All 15 P11D Benefit Types

BIKFix covers every benefit category that HMRC recognises:

| Benefit | What BIKFix Handles |
|---------|-------------------|
| **Company Cars** | List price, CO2 bands, electric car adjustments, diesel surcharges, RDE2 compliance |
| **Car Fuel Benefit** | Fixed multiplier, all-or-nothing rule, 30-day reinstatement rule |
| **Company Vans** | Flat rate proration by days of availability |
| **Van Fuel Benefit** | Flat rate, permanent withdrawal rules |
| **Private Medical Insurance** | Premium-based proration |
| **Gym Membership** | Cost-to-employer proration |
| **School Fees** | Fees paid, partial year calculation |
| **Beneficial Loans** | Official rate method, interest offset |
| **Living Accommodation** | Annual value, rent deduction |
| **Childcare (Non-Exempt)** | Exempt limit calculation |
| **Assets Placed at Disposal** | 20% annual value rule |
| **Assets Transferred** | Market value at transfer, employee payment offset |
| **Expenses Payments** | Business use deduction |
| **Mileage Allowance Excess** | Approved rate comparison |
| **Telephone/Broadband** | Private use calculation |

### Salary Sacrifice (OpRA) Built In

If the benefit was provided through salary sacrifice, BIKFix automatically applies the OpRA rule:

**Taxable BIK = the HIGHER of (prorated salary sacrificed) or (calculated BIK)**

Including the correct exemptions:
- Childcare: exempt from OpRA
- Ultra-low emission cars (CO2 ≤ 75g/km): exempt from OpRA
- Everything else: higher-of comparison applied

### Every Edge Case Handled

| Edge Case | How BIKFix Handles It |
|-----------|----------------------|
| Mid-month cancellation | Prorates by exact day count |
| Benefit started mid-year | Calculates from actual start date, not April 6th |
| Mid-year start AND mid-year end | Prorates the overlap period correctly |
| Employee joined mid-year | Uses their actual employment start date |
| Leap year tax years | Knows Feb 29 2024 falls in 2023-24, not 2024-25 |
| Replacement benefits | Old benefit ends, new one starts — both calculated |
| Fuel benefit reinstated within 30 days | No proration (HMRC all-or-nothing rule) |
| Company car CO2 bands | Uses exact 2024-25 HMRC emission tables |
| Multiple benefits cancelled at once | Each calculated independently |

### Xero Sync

After calculating, one click pushes the corrected BIK value to the employee's pay template in Xero. It will be applied on the next pay run. No manual data entry. No copy-paste errors.

### Audit Trail

Every calculation and every sync is logged with:
- Who did it
- When they did it
- What the inputs were
- What the result was

Because payroll is regulated. When HMRC asks "how did you arrive at this figure?", you have the answer.

---

## How It Helps You

### For Payroll Administrators

| Before BIKFix | After BIKFix |
|--------------|-------------|
| Google "how to prorate BIK" | Select employee, enter date, click calculate |
| Spend 1-2 hours on a spreadsheet | Get the answer in 10 seconds |
| Hope the calculation is right | Know the calculation is right (HMRC-verified) |
| Manually update Xero payroll | One click sync |
| Employee overpays tax for months | Correct tax code from day one |
| 4 hours on HMRC phone line | Never need to call |
| Stress before P11D deadline | Figures already calculated and logged |

### For Employees

- Correct tax code immediately after benefit cancellation
- No more overpaying £50-500/month in tax
- No more waiting months for a refund
- Trust that payroll is handling their benefits properly

### For the Business

- Compliance with HMRC regulations
- Full audit trail for every BIK calculation
- Reduced payroll admin time (hours → seconds)
- No P11D filing errors or penalties
- Happy employees who trust their payslips

---

## How Much It Costs

### £19/month

- 30-day free trial (no card required to connect)
- Unlimited calculations
- All 15 benefit types
- Xero sync included
- Full audit trail
- Cancel anytime

### The Maths

One incorrect BIK calculation costs:
- 1-2 hours of admin time to research: £30-60
- 4-6 hours on HMRC phone: £100-150
- Employee overpays tax for 3 months: £150-1,500

**BIKFix costs £19/month. One prevented mistake pays for an entire year.**

---

## What's Coming Next

BIKFix today does one thing perfectly. Here's what we're building next:

### Coming Soon

| Feature | What It Does | Why It Matters |
|---------|-------------|----------------|
| **P11D Report Generation** | Generate PDF/CSV of all BIK calculations, formatted for HMRC year-end filing | Every employer with benefits must file P11D every April. BIKFix will generate the report automatically from your calculations. |
| **Bulk Processing** | Calculate BIK for multiple employees at once | For companies with 50+ employees, doing one at a time isn't practical. Upload a list, get all results at once. |
| **Calculation History** | Searchable dashboard of all past calculations | Find any calculation by employee, benefit type, or date. Perfect for audits and year-end reviews. |

### On the Roadmap

| Feature | What It Does |
|---------|-------------|
| **Sage Integration** | Same HMRC-accurate engine, delivered through Sage payroll |
| **Accountancy Firm Plan** | One subscription covering all your client companies |
| **Email Notifications** | Get alerted when syncs complete or when action is needed |
| **Multi-Year Support** | Calculate for current and previous tax years |
| **Auto-Detection** | BIKFix monitors your Xero payroll and flags when a benefit change needs a BIK recalculation |

---

## Trust & Accuracy

### How We Ensure Every Calculation Is Correct

1. **Tested against HMRC examples.** Every benefit type is tested using examples from HMRC's own published guidance documents. If HMRC says a £30,000 car with 100g/km CO2 has a BIK of £7,500 — our engine returns exactly £7,500.

2. **95 automated tests.** Every code change runs through 95 tests covering all 15 benefit types, edge cases, proration rules, OpRA logic, and API behaviour. If any test fails, the change doesn't ship.

3. **Built on HMRC rules, not approximations.** The BIK engine implements the actual HMRC calculation methodology:
   - Company car percentages from the official CO2 emissions table
   - Exact tax year boundaries (6 April to 5 April)
   - Correct leap year handling
   - Fuel benefit all-or-nothing rule
   - OpRA higher-of comparison with correct exemptions
   - Proration by exact day count within the tax year

4. **Full audit trail.** Every calculation is logged with inputs, outputs, and timestamp. You can always trace how a number was derived.

### Tax Year Data (2024-25)

BIKFix uses the current HMRC rates:

| Rate | Value |
|------|-------|
| Tax Year | 6 April 2024 — 5 April 2025 |
| Van Flat Rate | £3,960 |
| Van Fuel Flat Rate | £757 |
| Car Fuel Multiplier | £27,800 |
| Beneficial Loan Official Rate | 2.25% |
| Company Car BIK | 2% (0g/km) to 37% (max) |

These are updated every April when HMRC publishes new rates.

---

## Frequently Asked Questions

**Q: Do I need to be an accountant to use this?**
No. BIKFix is built for payroll administrators, HR managers, and office managers — anyone who handles employee benefits in Xero. You enter what you know (employee, benefit, date). BIKFix handles the HMRC rules.

**Q: What if I'm not sure which benefit type to select?**
BIKFix lists all 15 P11D benefit categories with clear labels. If it's health insurance, select Private Medical Insurance. If it's a company car, select Company Car. The form adapts to show only the fields relevant to that benefit type.

**Q: How do I know the calculation is correct?**
Every calculation is tested against HMRC published examples. You can verify any result against HMRC guidance EIM (Employment Income Manual). If you ever find a discrepancy, contact us and we'll investigate immediately.

**Q: Does BIKFix file P11D for me?**
Not yet — P11D report generation is coming soon. Currently, BIKFix calculates the prorated BIK values and syncs them to Xero. You still file P11D through your normal process, but with the correct figures already calculated.

**Q: Can I use this for previous tax years?**
Currently BIKFix supports the 2024-25 tax year. Multi-year support is on the roadmap.

**Q: What happens if I cancel my subscription?**
Your calculation history stays in the system. You can still view past calculations but can't create new ones or sync to Xero.

**Q: Is my data secure?**
BIKFix connects to Xero via OAuth2 (the same security standard Xero uses for all its apps). We only read employee names and IDs — we don't access salary, bank details, or personal data. All data is stored in encrypted databases on Railway's infrastructure.

**Q: Do you support Sage or other payroll software?**
Xero only for now. Sage integration is on our roadmap.

---

## About

BIKFix was built because a simple payroll calculation shouldn't take hours, cost employees hundreds in overpaid tax, or require a phone call to HMRC.

We do one thing. We do it right. Every time.

---

## Contact

- Support: [your email]
- Website: www.bikfix.com
- App: app.bikfix.com
- Terms: app.bikfix.com/terms
- Privacy: app.bikfix.com/privacy

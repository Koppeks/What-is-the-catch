import { hashPassword } from "../../server/src/passwordHandler";
import { prisma } from "./src/client";

async function main() {
  const password = await hashPassword("admin");
  await prisma.user.upsert({
    where: {
      email: "admin@admin.com",
    },
    update: {
      username: "admin",
    },
    create: {
      username: "admin",
      email: "admin@admin.com",
      password,
      userRole: "ADMIN",
    },
  });

  await prisma.clauseCategory.createMany({
    data: [
      {
        slug: "AGE_LIMIT",
        isActive: true,
        label: "Age limit",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when the text states a minimum age or restricts minors; escalate if <13 or bans under-18.",
        triggerKeywords: [
          "at least 13 years",
          "must be 13",
          "under 13",
          "18+ only",
          "minimum age",
          "children under",
          "no minors",
        ],
        version: "0.0.1",
      },
      {
        slug: "PRIVACY_REFERENCE",
        isActive: true,
        label: "privacy reference",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when a privacy policy is referenced or linked.",
        triggerKeywords: ["privacy policy", "privacy", "data protection"],
        version: "0.0.1",
      },
      {
        slug: "DATA_SHARING",
        isActive: true,
        label: "data sharing",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when sharing/disclosure of personal data to third parties is stated.",
        triggerKeywords: [
          "share with third parties",
          "disclose to",
          "transfer data",
          "vendors",
          "affiliates",
          "service providers",
        ],
        version: "0.0.1",
      },
      {
        slug: "DATA_RETENTION",
        isActive: true,
        label: "data retention",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when the retention period or how long data is kept is described.",
        triggerKeywords: [
          "retain for",
          "retention period",
          "we keep your data",
          "until necessary",
        ],
        version: "0.0.1",
      },
      {
        slug: "MODIFICATION_RIGHTS",
        isActive: true,
        label: "modification of your rights",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when the service reserves unilateral rights to change terms/policies; escalate if at any time or without notice.",
        triggerKeywords: [
          "we may modify",
          "reserve the right to change",
          "at any time",
          "without notice",
        ],
        version: "0.0.1",
      },
      {
        slug: "CHANGES_NOTICE",
        isActive: true,
        label: "change with notice",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when the method/period of notifying changes is specified or missing.",
        triggerKeywords: [
          "we will notify",
          "notice period",
          "we will post",
          "email notice",
        ],
        version: "0.0.1",
      },
      {
        slug: "TERMINATION",
        isActive: true,
        label: "termination of service",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when accounts/services can be suspended or terminated and under what conditions.",
        triggerKeywords: [
          "we may terminate",
          "suspend your account",
          "at our sole discretion",
          "cancel your access",
        ],
        version: "0.0.1",
      },
      {
        slug: "USER_CONDUCT",
        isActive: true,
        label: "user conduct",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when prohibited behaviors or user obligations are listed.",
        triggerKeywords: [
          "you agree not to",
          "prohibited",
          "misuse",
          "abuse",
          "illegal",
          "fraud",
          "spamming",
        ],
        version: "0.0.1",
      },
      {
        slug: "IP_RIGHTS",
        isActive: true,
        label: "your content rights",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when IP ownership or license to user content is defined.",
        triggerKeywords: [
          "intellectual property",
          "all rights reserved",
          "license to",
          "content you submit",
        ],
        version: "0.0.1",
      },
      {
        slug: "WARRANTY_DISCLAIMERS",
        isActive: true,
        label: "warranty disclaimers",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when warranties are disclaimed (AS IS/NO WARRANTIES).",
        triggerKeywords: [
          "as is",
          "as available",
          "no warranties",
          "merchantability",
          "fitness for a particular purpose",
        ],
        version: "0.0.1",
      },
      {
        slug: "LIABILITY_CAP",
        isActive: true,
        label: "limitations of liability",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when liability is limited/capped; escalate for 'maximum extent permitted by law' or caps below fees paid.",
        triggerKeywords: [
          "liability is limited",
          "cap of",
          "maximum extent permitted by law",
          "we are not liable",
          "limit our liability",
        ],
        version: "0.0.1",
      },
      {
        slug: "INDEMNIFICATION",
        isActive: true,
        label: "indemnification",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when users must indemnify/defend/hold harmless the service.",
        triggerKeywords: [
          "indemnify",
          "defend and hold harmless",
          "indemnification",
        ],
        version: "0.0.1",
      },
      {
        slug: "PAYMENTS",
        isActive: true,
        label: "payments",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when fees/charges/billing/payment terms are described.",
        triggerKeywords: ["fees", "charges", "billing", "payment terms"],
        version: "0.0.1",
      },
      {
        slug: "AUTO_RENEWAL",
        isActive: true,
        label: "auto renewal",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when subscriptions renew automatically or continue until cancelled.",
        triggerKeywords: [
          "auto-renew",
          "renews automatically",
          "until cancelled",
          "renewal period",
        ],
        version: "0.0.1",
      },
      {
        slug: "REFUNDS",
        isActive: true,
        label: "refunds",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when refund policy is stated; escalate for 'no refunds' or non-refundable fees.",
        triggerKeywords: ["no refunds", "non-refundable", "refund policy"],
        version: "0.0.1",
      },
      {
        slug: "CANCELLATION",
        isActive: true,
        label: "cancellation",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when cancellation terms/process/windows are defined.",
        triggerKeywords: [
          "cancel at any time",
          "how to cancel",
          "cancellation window",
          "terminate subscription",
        ],
        version: "0.0.1",
      },
      {
        slug: "GOVERNING_LAW",
        isActive: true,
        label: "governing law",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when governing law is named (country/state/region).",
        triggerKeywords: [
          "governed by the laws of",
          "under the laws of",
          "ley aplicable",
        ],
        version: "0.0.1",
      },
      {
        slug: "CONTACT",
        isActive: true,
        label: "availability for contact",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when official contact channels are provided or missing.",
        triggerKeywords: [
          "contact us at",
          "support@",
          "email:",
          "address:",
          "phone:",
        ],
        version: "0.0.1",
      },
      {
        slug: "SUPPORT",
        isActive: true,
        label: "availability for support",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when user support/help center/response times/SLA are specified.",
        triggerKeywords: [
          "support",
          "help center",
          "customer service",
          "response time",
          "SLA",
        ],
        version: "0.0.1",
      },
      {
        slug: "JURISDICTION",
        isActive: true,
        label: "jurisdiction",
        defaultScoring: 0.5,
        triggerInstruction:
          "Fire when courts/venue/exclusive jurisdiction are defined.",
        triggerKeywords: [
          "exclusive jurisdiction",
          "venue",
          "courts of",
          "competent courts",
        ],
        version: "0.0.1",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("seed run was a success");
  })
  .catch(async (error) => {
    console.error("seed run was a disaster");
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });

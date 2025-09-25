import { hashPassword } from "../../server/src/passwordHandler";
import { prisma } from "./src/client";

async function main(){
    const password = await hashPassword("admin")
    await prisma.user.upsert({
      where:{
        email: "admin@admin.com"
      },
      update:{
        username: "admin"
      },
      create:{
        username: "admin",
        email: "admin@admin.com",
        password,
        userRole: "ADMIN"
      }
    })

    await prisma.clauseType.createMany({
      data:[
        {
          slug: "AGE_LIMIT",
          isActive: true,
          label: "Age limit",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "PRIVACY_REFERENCE",
          isActive: true,
          label: "privacy reference",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "DATA_SHARING",
          isActive: true,
          label: "data sharing",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "MODIFICATION_RIGHTS",
          isActive: true,
          label: "modification of your rights",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "CHANGES_NOTICE",
          isActive: true,
          label: "change with notice",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "TERMINATION",
          isActive: true,
          label: "termination of service",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "USER_CONDUCT",
          isActive: true,
          label: "user conduct",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "IP_RIGHTS",
          isActive: true,
          label: "your content rights",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "WARRANTY_DISCLAIMERS",
          isActive: true,
          label: "warranty disclaimers",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "LIABILITY_CAP",
          isActive: true,
          label: " limitations of liability",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "INDEMNIFICATION",
          isActive: true,
          label: "indemnification",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "MONEY_RELATED", //PAYMENTS / AUTO_RENEWAL / REFUNDS / CANCELLATION
          isActive: true,
          label: "payment related",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "GOVERNING_LAW",
          isActive: true,
          label: "governing law",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "AVAILABLILITY_CONTACT", //CONTACT / SUPPORT
          isActive: true,
          label: "availability for contact",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
        {
          slug: "JURISDICTION",
          isActive: true,
          label: "jurisdiction",
          defaultScoring: 0.2,
          version: "0.0.1"
        },
      ]
    })
}

main().then(async ()=> {
  await prisma.$disconnect()
  console.log("seed run was a success")
}).catch(async (error) => {
  console.error("seed run was a disaster")
  console.log(error)
  await prisma.$disconnect()
  process.exit(1)
})
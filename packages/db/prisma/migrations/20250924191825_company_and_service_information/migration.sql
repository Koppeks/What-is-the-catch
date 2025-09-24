-- CreateEnum
CREATE TYPE "public"."AliasKind" AS ENUM ('BRAND', 'ALIAS', 'LEGAL_ENTITY');

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "countryCode" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompanyAlias" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "kind" "public"."AliasKind" NOT NULL,
    "value" TEXT NOT NULL,
    "valueNorm" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyAlias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Domain" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ServiceDomain" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    "pathPattern" TEXT,

    CONSTRAINT "ServiceDomain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_slug_key" ON "public"."Company"("slug");

-- CreateIndex
CREATE INDEX "Service_companyId_name_idx" ON "public"."Service"("companyId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Service_companyId_slug_key" ON "public"."Service"("companyId", "slug");

-- CreateIndex
CREATE INDEX "CompanyAlias_valueNorm_idx" ON "public"."CompanyAlias"("valueNorm");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAlias_companyId_valueNorm_key" ON "public"."CompanyAlias"("companyId", "valueNorm");

-- CreateIndex
CREATE UNIQUE INDEX "Domain_host_key" ON "public"."Domain"("host");

-- CreateIndex
CREATE INDEX "Domain_companyId_idx" ON "public"."Domain"("companyId");

-- CreateIndex
CREATE INDEX "ServiceDomain_domainId_idx" ON "public"."ServiceDomain"("domainId");

-- CreateIndex
CREATE INDEX "ServiceDomain_serviceId_idx" ON "public"."ServiceDomain"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceDomain_serviceId_domainId_pathPattern_key" ON "public"."ServiceDomain"("serviceId", "domainId", "pathPattern");

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompanyAlias" ADD CONSTRAINT "CompanyAlias_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Domain" ADD CONSTRAINT "Domain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceDomain" ADD CONSTRAINT "ServiceDomain_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceDomain" ADD CONSTRAINT "ServiceDomain_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "public"."Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

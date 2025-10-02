import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema'
import { CompanyAliasWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyAliasWhereUniqueInputSchema'
import { CompanyAliasCreateInputSchema } from '../inputTypeSchemas/CompanyAliasCreateInputSchema'
import { CompanyAliasUncheckedCreateInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedCreateInputSchema'
import { CompanyAliasUpdateInputSchema } from '../inputTypeSchemas/CompanyAliasUpdateInputSchema'
import { CompanyAliasUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedUpdateInputSchema'
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanyAliasSelectSchema: z.ZodType<Prisma.CompanyAliasSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  kind: z.boolean().optional(),
  value: z.boolean().optional(),
  valueNorm: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export const CompanyAliasUpsertArgsSchema: z.ZodType<Prisma.CompanyAliasUpsertArgs> = z.object({
  select: CompanyAliasSelectSchema.optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
  where: CompanyAliasWhereUniqueInputSchema, 
  create: z.union([ CompanyAliasCreateInputSchema, CompanyAliasUncheckedCreateInputSchema ]),
  update: z.union([ CompanyAliasUpdateInputSchema, CompanyAliasUncheckedUpdateInputSchema ]),
}).strict();

export default CompanyAliasUpsertArgsSchema;

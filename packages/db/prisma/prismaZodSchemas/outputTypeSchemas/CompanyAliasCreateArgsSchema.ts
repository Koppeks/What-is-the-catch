import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema'
import { CompanyAliasCreateInputSchema } from '../inputTypeSchemas/CompanyAliasCreateInputSchema'
import { CompanyAliasUncheckedCreateInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedCreateInputSchema'
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

export const CompanyAliasCreateArgsSchema: z.ZodType<Prisma.CompanyAliasCreateArgs> = z.object({
  select: CompanyAliasSelectSchema.optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
  data: z.union([ CompanyAliasCreateInputSchema, CompanyAliasUncheckedCreateInputSchema ]),
}).strict();

export default CompanyAliasCreateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema'
import { CompanyAliasUpdateInputSchema } from '../inputTypeSchemas/CompanyAliasUpdateInputSchema'
import { CompanyAliasUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedUpdateInputSchema'
import { CompanyAliasWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyAliasWhereUniqueInputSchema'
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

export const CompanyAliasUpdateArgsSchema: z.ZodType<Prisma.CompanyAliasUpdateArgs> = z.object({
  select: CompanyAliasSelectSchema.optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
  data: z.union([ CompanyAliasUpdateInputSchema, CompanyAliasUncheckedUpdateInputSchema ]),
  where: CompanyAliasWhereUniqueInputSchema, 
}).strict();

export default CompanyAliasUpdateArgsSchema;

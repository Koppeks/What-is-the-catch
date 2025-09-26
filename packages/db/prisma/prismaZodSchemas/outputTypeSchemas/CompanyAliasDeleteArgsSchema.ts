import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema'
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

export const CompanyAliasDeleteArgsSchema: z.ZodType<Prisma.CompanyAliasDeleteArgs> = z.object({
  select: CompanyAliasSelectSchema.optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
  where: CompanyAliasWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CompanyAliasDeleteArgs>;

export default CompanyAliasDeleteArgsSchema;

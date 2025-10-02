import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema'
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'
import { CompanyAliasOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompanyAliasOrderByWithRelationInputSchema'
import { CompanyAliasWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyAliasWhereUniqueInputSchema'
import { CompanyAliasScalarFieldEnumSchema } from '../inputTypeSchemas/CompanyAliasScalarFieldEnumSchema'
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

export const CompanyAliasFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompanyAliasFindFirstOrThrowArgs> = z.object({
  select: CompanyAliasSelectSchema.optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
  where: CompanyAliasWhereInputSchema.optional(), 
  orderBy: z.union([ CompanyAliasOrderByWithRelationInputSchema.array(), CompanyAliasOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyAliasWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyAliasScalarFieldEnumSchema, CompanyAliasScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CompanyAliasFindFirstOrThrowArgsSchema;

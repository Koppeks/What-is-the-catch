import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'
import { CompanyAliasOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CompanyAliasOrderByWithAggregationInputSchema'
import { CompanyAliasScalarFieldEnumSchema } from '../inputTypeSchemas/CompanyAliasScalarFieldEnumSchema'
import { CompanyAliasScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CompanyAliasScalarWhereWithAggregatesInputSchema'

export const CompanyAliasGroupByArgsSchema: z.ZodType<Prisma.CompanyAliasGroupByArgs> = z.object({
  where: CompanyAliasWhereInputSchema.optional(), 
  orderBy: z.union([ CompanyAliasOrderByWithAggregationInputSchema.array(), CompanyAliasOrderByWithAggregationInputSchema ]).optional(),
  by: CompanyAliasScalarFieldEnumSchema.array(), 
  having: CompanyAliasScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CompanyAliasGroupByArgsSchema;

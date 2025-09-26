import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'
import { CompanyAliasOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompanyAliasOrderByWithRelationInputSchema'
import { CompanyAliasWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyAliasWhereUniqueInputSchema'

export const CompanyAliasAggregateArgsSchema: z.ZodType<Prisma.CompanyAliasAggregateArgs> = z.object({
  where: CompanyAliasWhereInputSchema.optional(),
  orderBy: z.union([ CompanyAliasOrderByWithRelationInputSchema.array(),CompanyAliasOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyAliasWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasAggregateArgs>;

export default CompanyAliasAggregateArgsSchema;

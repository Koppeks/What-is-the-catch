import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'
import { ClauseCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ClauseCategoryOrderByWithAggregationInputSchema'
import { ClauseCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseCategoryScalarFieldEnumSchema'
import { ClauseCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ClauseCategoryScalarWhereWithAggregatesInputSchema'

export const ClauseCategoryGroupByArgsSchema: z.ZodType<Prisma.ClauseCategoryGroupByArgs> = z.object({
  where: ClauseCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ ClauseCategoryOrderByWithAggregationInputSchema.array(), ClauseCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: ClauseCategoryScalarFieldEnumSchema.array(), 
  having: ClauseCategoryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ClauseCategoryGroupByArgsSchema;

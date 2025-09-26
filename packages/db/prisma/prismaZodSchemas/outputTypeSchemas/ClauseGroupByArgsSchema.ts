import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'
import { ClauseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ClauseOrderByWithAggregationInputSchema'
import { ClauseScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseScalarFieldEnumSchema'
import { ClauseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ClauseScalarWhereWithAggregatesInputSchema'

export const ClauseGroupByArgsSchema: z.ZodType<Prisma.ClauseGroupByArgs> = z.object({
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithAggregationInputSchema.array(),ClauseOrderByWithAggregationInputSchema ]).optional(),
  by: ClauseScalarFieldEnumSchema.array(),
  having: ClauseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseGroupByArgs>;

export default ClauseGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeWhereInputSchema } from '../inputTypeSchemas/ClauseTypeWhereInputSchema'
import { ClauseTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ClauseTypeOrderByWithAggregationInputSchema'
import { ClauseTypeScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseTypeScalarFieldEnumSchema'
import { ClauseTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ClauseTypeScalarWhereWithAggregatesInputSchema'

export const ClauseTypeGroupByArgsSchema: z.ZodType<Prisma.ClauseTypeGroupByArgs> = z.object({
  where: ClauseTypeWhereInputSchema.optional(),
  orderBy: z.union([ ClauseTypeOrderByWithAggregationInputSchema.array(),ClauseTypeOrderByWithAggregationInputSchema ]).optional(),
  by: ClauseTypeScalarFieldEnumSchema.array(),
  having: ClauseTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeGroupByArgs>;

export default ClauseTypeGroupByArgsSchema;

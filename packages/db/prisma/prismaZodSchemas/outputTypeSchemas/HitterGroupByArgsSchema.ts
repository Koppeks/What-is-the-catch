import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterWhereInputSchema } from '../inputTypeSchemas/HitterWhereInputSchema'
import { HitterOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HitterOrderByWithAggregationInputSchema'
import { HitterScalarFieldEnumSchema } from '../inputTypeSchemas/HitterScalarFieldEnumSchema'
import { HitterScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HitterScalarWhereWithAggregatesInputSchema'

export const HitterGroupByArgsSchema: z.ZodType<Prisma.HitterGroupByArgs> = z.object({
  where: HitterWhereInputSchema.optional(), 
  orderBy: z.union([ HitterOrderByWithAggregationInputSchema.array(), HitterOrderByWithAggregationInputSchema ]).optional(),
  by: HitterScalarFieldEnumSchema.array(), 
  having: HitterScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HitterGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionWhereInputSchema } from '../inputTypeSchemas/SectionWhereInputSchema'
import { SectionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SectionOrderByWithAggregationInputSchema'
import { SectionScalarFieldEnumSchema } from '../inputTypeSchemas/SectionScalarFieldEnumSchema'
import { SectionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SectionScalarWhereWithAggregatesInputSchema'

export const SectionGroupByArgsSchema: z.ZodType<Prisma.SectionGroupByArgs> = z.object({
  where: SectionWhereInputSchema.optional(), 
  orderBy: z.union([ SectionOrderByWithAggregationInputSchema.array(), SectionOrderByWithAggregationInputSchema ]).optional(),
  by: SectionScalarFieldEnumSchema.array(), 
  having: SectionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SectionGroupByArgsSchema;

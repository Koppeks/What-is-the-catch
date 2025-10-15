import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionWhereInputSchema } from '../inputTypeSchemas/SectionWhereInputSchema'
import { SectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/SectionOrderByWithRelationInputSchema'
import { SectionWhereUniqueInputSchema } from '../inputTypeSchemas/SectionWhereUniqueInputSchema'

export const SectionAggregateArgsSchema: z.ZodType<Prisma.SectionAggregateArgs> = z.object({
  where: SectionWhereInputSchema.optional(), 
  orderBy: z.union([ SectionOrderByWithRelationInputSchema.array(), SectionOrderByWithRelationInputSchema ]).optional(),
  cursor: SectionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SectionAggregateArgsSchema;

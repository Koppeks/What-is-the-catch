import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'
import { ClauseCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseCategoryOrderByWithRelationInputSchema'
import { ClauseCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereUniqueInputSchema'

export const ClauseCategoryAggregateArgsSchema: z.ZodType<Prisma.ClauseCategoryAggregateArgs> = z.object({
  where: ClauseCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ ClauseCategoryOrderByWithRelationInputSchema.array(), ClauseCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseCategoryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ClauseCategoryAggregateArgsSchema;

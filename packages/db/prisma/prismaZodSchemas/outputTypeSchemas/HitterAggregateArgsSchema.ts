import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterWhereInputSchema } from '../inputTypeSchemas/HitterWhereInputSchema'
import { HitterOrderByWithRelationInputSchema } from '../inputTypeSchemas/HitterOrderByWithRelationInputSchema'
import { HitterWhereUniqueInputSchema } from '../inputTypeSchemas/HitterWhereUniqueInputSchema'

export const HitterAggregateArgsSchema: z.ZodType<Prisma.HitterAggregateArgs> = z.object({
  where: HitterWhereInputSchema.optional(), 
  orderBy: z.union([ HitterOrderByWithRelationInputSchema.array(), HitterOrderByWithRelationInputSchema ]).optional(),
  cursor: HitterWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HitterAggregateArgsSchema;

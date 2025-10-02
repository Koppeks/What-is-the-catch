import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'
import { DocumentTriggerOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentTriggerOrderByWithRelationInputSchema'
import { DocumentTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereUniqueInputSchema'

export const DocumentTriggerAggregateArgsSchema: z.ZodType<Prisma.DocumentTriggerAggregateArgs> = z.object({
  where: DocumentTriggerWhereInputSchema.optional(), 
  orderBy: z.union([ DocumentTriggerOrderByWithRelationInputSchema.array(), DocumentTriggerOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentTriggerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DocumentTriggerAggregateArgsSchema;

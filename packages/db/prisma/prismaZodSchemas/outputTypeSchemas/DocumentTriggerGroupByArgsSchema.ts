import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'
import { DocumentTriggerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DocumentTriggerOrderByWithAggregationInputSchema'
import { DocumentTriggerScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentTriggerScalarFieldEnumSchema'
import { DocumentTriggerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DocumentTriggerScalarWhereWithAggregatesInputSchema'

export const DocumentTriggerGroupByArgsSchema: z.ZodType<Prisma.DocumentTriggerGroupByArgs> = z.object({
  where: DocumentTriggerWhereInputSchema.optional(), 
  orderBy: z.union([ DocumentTriggerOrderByWithAggregationInputSchema.array(), DocumentTriggerOrderByWithAggregationInputSchema ]).optional(),
  by: DocumentTriggerScalarFieldEnumSchema.array(), 
  having: DocumentTriggerScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DocumentTriggerGroupByArgsSchema;

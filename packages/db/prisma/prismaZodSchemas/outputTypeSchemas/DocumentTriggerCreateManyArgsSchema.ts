import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerCreateManyInputSchema } from '../inputTypeSchemas/DocumentTriggerCreateManyInputSchema'

export const DocumentTriggerCreateManyArgsSchema: z.ZodType<Prisma.DocumentTriggerCreateManyArgs> = z.object({
  data: z.union([ DocumentTriggerCreateManyInputSchema, DocumentTriggerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DocumentTriggerCreateManyArgsSchema;

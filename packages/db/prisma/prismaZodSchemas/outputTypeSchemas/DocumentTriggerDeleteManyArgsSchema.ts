import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'

export const DocumentTriggerDeleteManyArgsSchema: z.ZodType<Prisma.DocumentTriggerDeleteManyArgs> = z.object({
  where: DocumentTriggerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default DocumentTriggerDeleteManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentWhereInputSchema } from '../inputTypeSchemas/DocumentWhereInputSchema'

export const DocumentDeleteManyArgsSchema: z.ZodType<Prisma.DocumentDeleteManyArgs> = z.object({
  where: DocumentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default DocumentDeleteManyArgsSchema;

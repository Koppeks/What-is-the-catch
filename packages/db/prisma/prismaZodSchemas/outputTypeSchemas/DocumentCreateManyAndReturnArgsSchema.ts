import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateManyInputSchema } from '../inputTypeSchemas/DocumentCreateManyInputSchema'

export const DocumentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DocumentCreateManyAndReturnArgs> = z.object({
  data: z.union([ DocumentCreateManyInputSchema, DocumentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DocumentCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateManyInputSchema } from '../inputTypeSchemas/DocumentCreateManyInputSchema'

export const DocumentCreateManyArgsSchema: z.ZodType<Prisma.DocumentCreateManyArgs> = z.object({
  data: z.union([ DocumentCreateManyInputSchema,DocumentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DocumentCreateManyArgs>;

export default DocumentCreateManyArgsSchema;

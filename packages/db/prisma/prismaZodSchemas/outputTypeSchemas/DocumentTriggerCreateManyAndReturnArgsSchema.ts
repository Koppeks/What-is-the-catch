import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerCreateManyInputSchema } from '../inputTypeSchemas/DocumentTriggerCreateManyInputSchema'

export const DocumentTriggerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DocumentTriggerCreateManyAndReturnArgs> = z.object({
  data: z.union([ DocumentTriggerCreateManyInputSchema,DocumentTriggerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateManyAndReturnArgs>;

export default DocumentTriggerCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerCreateManyInputSchema } from '../inputTypeSchemas/TriggerCreateManyInputSchema'

export const TriggerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TriggerCreateManyAndReturnArgs> = z.object({
  data: z.union([ TriggerCreateManyInputSchema, TriggerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TriggerCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerCreateManyInputSchema } from '../inputTypeSchemas/TriggerCreateManyInputSchema'

export const TriggerCreateManyArgsSchema: z.ZodType<Prisma.TriggerCreateManyArgs> = z.object({
  data: z.union([ TriggerCreateManyInputSchema,TriggerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TriggerCreateManyArgs>;

export default TriggerCreateManyArgsSchema;

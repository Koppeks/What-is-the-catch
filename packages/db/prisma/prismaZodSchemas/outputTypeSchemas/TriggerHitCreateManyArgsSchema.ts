import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitCreateManyInputSchema } from '../inputTypeSchemas/TriggerHitCreateManyInputSchema'

export const TriggerHitCreateManyArgsSchema: z.ZodType<Prisma.TriggerHitCreateManyArgs> = z.object({
  data: z.union([ TriggerHitCreateManyInputSchema,TriggerHitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TriggerHitCreateManyArgs>;

export default TriggerHitCreateManyArgsSchema;

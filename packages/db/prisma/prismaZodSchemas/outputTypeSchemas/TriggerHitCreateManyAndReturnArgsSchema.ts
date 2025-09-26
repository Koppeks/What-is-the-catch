import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitCreateManyInputSchema } from '../inputTypeSchemas/TriggerHitCreateManyInputSchema'

export const TriggerHitCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TriggerHitCreateManyAndReturnArgs> = z.object({
  data: z.union([ TriggerHitCreateManyInputSchema,TriggerHitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TriggerHitCreateManyAndReturnArgs>;

export default TriggerHitCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitUpdateManyMutationInputSchema } from '../inputTypeSchemas/TriggerHitUpdateManyMutationInputSchema'
import { TriggerHitUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TriggerHitUncheckedUpdateManyInputSchema'
import { TriggerHitWhereInputSchema } from '../inputTypeSchemas/TriggerHitWhereInputSchema'

export const TriggerHitUpdateManyArgsSchema: z.ZodType<Prisma.TriggerHitUpdateManyArgs> = z.object({
  data: z.union([ TriggerHitUpdateManyMutationInputSchema, TriggerHitUncheckedUpdateManyInputSchema ]),
  where: TriggerHitWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TriggerHitUpdateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitWhereInputSchema } from '../inputTypeSchemas/TriggerHitWhereInputSchema'

export const TriggerHitDeleteManyArgsSchema: z.ZodType<Prisma.TriggerHitDeleteManyArgs> = z.object({
  where: TriggerHitWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerHitDeleteManyArgs>;

export default TriggerHitDeleteManyArgsSchema;

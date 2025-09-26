import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerWhereInputSchema } from '../inputTypeSchemas/TriggerWhereInputSchema'

export const TriggerDeleteManyArgsSchema: z.ZodType<Prisma.TriggerDeleteManyArgs> = z.object({
  where: TriggerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerDeleteManyArgs>;

export default TriggerDeleteManyArgsSchema;

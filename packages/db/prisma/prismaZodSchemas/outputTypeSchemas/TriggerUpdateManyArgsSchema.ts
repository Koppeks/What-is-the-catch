import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerUpdateManyMutationInputSchema } from '../inputTypeSchemas/TriggerUpdateManyMutationInputSchema'
import { TriggerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TriggerUncheckedUpdateManyInputSchema'
import { TriggerWhereInputSchema } from '../inputTypeSchemas/TriggerWhereInputSchema'

export const TriggerUpdateManyArgsSchema: z.ZodType<Prisma.TriggerUpdateManyArgs> = z.object({
  data: z.union([ TriggerUpdateManyMutationInputSchema,TriggerUncheckedUpdateManyInputSchema ]),
  where: TriggerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyArgs>;

export default TriggerUpdateManyArgsSchema;

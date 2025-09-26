import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerUpdateManyMutationInputSchema } from '../inputTypeSchemas/TriggerUpdateManyMutationInputSchema'
import { TriggerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TriggerUncheckedUpdateManyInputSchema'
import { TriggerWhereInputSchema } from '../inputTypeSchemas/TriggerWhereInputSchema'

export const TriggerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TriggerUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TriggerUpdateManyMutationInputSchema,TriggerUncheckedUpdateManyInputSchema ]),
  where: TriggerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyAndReturnArgs>;

export default TriggerUpdateManyAndReturnArgsSchema;

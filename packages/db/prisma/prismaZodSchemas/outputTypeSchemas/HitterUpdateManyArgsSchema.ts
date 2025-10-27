import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterUpdateManyMutationInputSchema } from '../inputTypeSchemas/HitterUpdateManyMutationInputSchema'
import { HitterUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HitterUncheckedUpdateManyInputSchema'
import { HitterWhereInputSchema } from '../inputTypeSchemas/HitterWhereInputSchema'

export const HitterUpdateManyArgsSchema: z.ZodType<Prisma.HitterUpdateManyArgs> = z.object({
  data: z.union([ HitterUpdateManyMutationInputSchema, HitterUncheckedUpdateManyInputSchema ]),
  where: HitterWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default HitterUpdateManyArgsSchema;

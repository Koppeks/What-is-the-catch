import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClauseTypeUpdateManyMutationInputSchema'
import { ClauseTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClauseTypeUncheckedUpdateManyInputSchema'
import { ClauseTypeWhereInputSchema } from '../inputTypeSchemas/ClauseTypeWhereInputSchema'

export const ClauseTypeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseTypeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseTypeUpdateManyMutationInputSchema,ClauseTypeUncheckedUpdateManyInputSchema ]),
  where: ClauseTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeUpdateManyAndReturnArgs>;

export default ClauseTypeUpdateManyAndReturnArgsSchema;

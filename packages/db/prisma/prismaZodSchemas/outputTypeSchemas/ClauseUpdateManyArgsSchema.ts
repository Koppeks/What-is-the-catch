import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClauseUpdateManyMutationInputSchema'
import { ClauseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClauseUncheckedUpdateManyInputSchema'
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'

export const ClauseUpdateManyArgsSchema: z.ZodType<Prisma.ClauseUpdateManyArgs> = z.object({
  data: z.union([ ClauseUpdateManyMutationInputSchema,ClauseUncheckedUpdateManyInputSchema ]),
  where: ClauseWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdateManyArgs>;

export default ClauseUpdateManyArgsSchema;

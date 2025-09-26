import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeWhereInputSchema } from '../inputTypeSchemas/ClauseTypeWhereInputSchema'

export const ClauseTypeDeleteManyArgsSchema: z.ZodType<Prisma.ClauseTypeDeleteManyArgs> = z.object({
  where: ClauseTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeDeleteManyArgs>;

export default ClauseTypeDeleteManyArgsSchema;

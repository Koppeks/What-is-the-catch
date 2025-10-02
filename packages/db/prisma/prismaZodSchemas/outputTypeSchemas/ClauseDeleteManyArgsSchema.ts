import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'

export const ClauseDeleteManyArgsSchema: z.ZodType<Prisma.ClauseDeleteManyArgs> = z.object({
  where: ClauseWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ClauseDeleteManyArgsSchema;

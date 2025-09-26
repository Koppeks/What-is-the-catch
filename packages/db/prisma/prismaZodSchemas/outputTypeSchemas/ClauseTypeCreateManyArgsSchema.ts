import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeCreateManyInputSchema } from '../inputTypeSchemas/ClauseTypeCreateManyInputSchema'

export const ClauseTypeCreateManyArgsSchema: z.ZodType<Prisma.ClauseTypeCreateManyArgs> = z.object({
  data: z.union([ ClauseTypeCreateManyInputSchema,ClauseTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeCreateManyArgs>;

export default ClauseTypeCreateManyArgsSchema;

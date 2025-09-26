import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCreateManyInputSchema } from '../inputTypeSchemas/ClauseCreateManyInputSchema'

export const ClauseCreateManyArgsSchema: z.ZodType<Prisma.ClauseCreateManyArgs> = z.object({
  data: z.union([ ClauseCreateManyInputSchema,ClauseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseCreateManyArgs>;

export default ClauseCreateManyArgsSchema;

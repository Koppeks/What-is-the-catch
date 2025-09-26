import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeCreateManyInputSchema } from '../inputTypeSchemas/ClauseTypeCreateManyInputSchema'

export const ClauseTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseTypeCreateManyInputSchema,ClauseTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeCreateManyAndReturnArgs>;

export default ClauseTypeCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryCreateManyInputSchema } from '../inputTypeSchemas/ClauseCategoryCreateManyInputSchema'

export const ClauseCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseCategoryCreateManyInputSchema, ClauseCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ClauseCategoryCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryCreateManyInputSchema } from '../inputTypeSchemas/ClauseCategoryCreateManyInputSchema'

export const ClauseCategoryCreateManyArgsSchema: z.ZodType<Prisma.ClauseCategoryCreateManyArgs> = z.object({
  data: z.union([ ClauseCategoryCreateManyInputSchema,ClauseCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseCategoryCreateManyArgs>;

export default ClauseCategoryCreateManyArgsSchema;

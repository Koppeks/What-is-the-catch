import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterCreateManyInputSchema } from '../inputTypeSchemas/HitterCreateManyInputSchema'

export const HitterCreateManyArgsSchema: z.ZodType<Prisma.HitterCreateManyArgs> = z.object({
  data: z.union([ HitterCreateManyInputSchema, HitterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HitterCreateManyArgsSchema;

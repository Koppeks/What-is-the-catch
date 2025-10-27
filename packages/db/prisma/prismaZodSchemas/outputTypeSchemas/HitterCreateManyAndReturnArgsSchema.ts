import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterCreateManyInputSchema } from '../inputTypeSchemas/HitterCreateManyInputSchema'

export const HitterCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HitterCreateManyAndReturnArgs> = z.object({
  data: z.union([ HitterCreateManyInputSchema, HitterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default HitterCreateManyAndReturnArgsSchema;

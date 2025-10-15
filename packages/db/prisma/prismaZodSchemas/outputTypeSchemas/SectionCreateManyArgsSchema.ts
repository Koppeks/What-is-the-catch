import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionCreateManyInputSchema } from '../inputTypeSchemas/SectionCreateManyInputSchema'

export const SectionCreateManyArgsSchema: z.ZodType<Prisma.SectionCreateManyArgs> = z.object({
  data: z.union([ SectionCreateManyInputSchema, SectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SectionCreateManyArgsSchema;

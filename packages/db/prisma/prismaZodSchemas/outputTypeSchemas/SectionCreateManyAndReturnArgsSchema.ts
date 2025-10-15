import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionCreateManyInputSchema } from '../inputTypeSchemas/SectionCreateManyInputSchema'

export const SectionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SectionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SectionCreateManyInputSchema, SectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default SectionCreateManyAndReturnArgsSchema;

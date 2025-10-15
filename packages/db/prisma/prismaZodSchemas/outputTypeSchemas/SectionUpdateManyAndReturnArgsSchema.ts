import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionUpdateManyMutationInputSchema } from '../inputTypeSchemas/SectionUpdateManyMutationInputSchema'
import { SectionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SectionUncheckedUpdateManyInputSchema'
import { SectionWhereInputSchema } from '../inputTypeSchemas/SectionWhereInputSchema'

export const SectionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SectionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SectionUpdateManyMutationInputSchema, SectionUncheckedUpdateManyInputSchema ]),
  where: SectionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SectionUpdateManyAndReturnArgsSchema;

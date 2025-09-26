import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainCreateManyInputSchema } from '../inputTypeSchemas/DomainCreateManyInputSchema'

export const DomainCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DomainCreateManyAndReturnArgs> = z.object({
  data: z.union([ DomainCreateManyInputSchema,DomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DomainCreateManyAndReturnArgs>;

export default DomainCreateManyAndReturnArgsSchema;

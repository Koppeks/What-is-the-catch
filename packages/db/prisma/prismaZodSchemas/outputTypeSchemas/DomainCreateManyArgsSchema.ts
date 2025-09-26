import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainCreateManyInputSchema } from '../inputTypeSchemas/DomainCreateManyInputSchema'

export const DomainCreateManyArgsSchema: z.ZodType<Prisma.DomainCreateManyArgs> = z.object({
  data: z.union([ DomainCreateManyInputSchema,DomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DomainCreateManyArgs>;

export default DomainCreateManyArgsSchema;

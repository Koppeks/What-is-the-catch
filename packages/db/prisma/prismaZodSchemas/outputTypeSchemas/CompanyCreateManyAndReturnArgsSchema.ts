import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateManyInputSchema } from '../inputTypeSchemas/CompanyCreateManyInputSchema'

export const CompanyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyCreateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyCreateManyInputSchema,CompanyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CompanyCreateManyAndReturnArgs>;

export default CompanyCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasCreateManyInputSchema } from '../inputTypeSchemas/CompanyAliasCreateManyInputSchema'

export const CompanyAliasCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyAliasCreateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyAliasCreateManyInputSchema,CompanyAliasCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasCreateManyAndReturnArgs>;

export default CompanyAliasCreateManyAndReturnArgsSchema;

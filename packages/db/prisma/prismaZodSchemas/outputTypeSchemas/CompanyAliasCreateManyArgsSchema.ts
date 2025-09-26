import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasCreateManyInputSchema } from '../inputTypeSchemas/CompanyAliasCreateManyInputSchema'

export const CompanyAliasCreateManyArgsSchema: z.ZodType<Prisma.CompanyAliasCreateManyArgs> = z.object({
  data: z.union([ CompanyAliasCreateManyInputSchema,CompanyAliasCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasCreateManyArgs>;

export default CompanyAliasCreateManyArgsSchema;

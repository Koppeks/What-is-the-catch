import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompanyAliasUpdateManyMutationInputSchema'
import { CompanyAliasUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedUpdateManyInputSchema'
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'

export const CompanyAliasUpdateManyArgsSchema: z.ZodType<Prisma.CompanyAliasUpdateManyArgs> = z.object({
  data: z.union([ CompanyAliasUpdateManyMutationInputSchema,CompanyAliasUncheckedUpdateManyInputSchema ]),
  where: CompanyAliasWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasUpdateManyArgs>;

export default CompanyAliasUpdateManyArgsSchema;

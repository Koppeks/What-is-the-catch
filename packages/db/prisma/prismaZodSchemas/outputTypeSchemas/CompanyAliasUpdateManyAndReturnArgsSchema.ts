import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompanyAliasUpdateManyMutationInputSchema'
import { CompanyAliasUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompanyAliasUncheckedUpdateManyInputSchema'
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'

export const CompanyAliasUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyAliasUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyAliasUpdateManyMutationInputSchema, CompanyAliasUncheckedUpdateManyInputSchema ]),
  where: CompanyAliasWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CompanyAliasUpdateManyAndReturnArgsSchema;

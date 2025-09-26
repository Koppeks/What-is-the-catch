import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasWhereInputSchema } from '../inputTypeSchemas/CompanyAliasWhereInputSchema'

export const CompanyAliasDeleteManyArgsSchema: z.ZodType<Prisma.CompanyAliasDeleteManyArgs> = z.object({
  where: CompanyAliasWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasDeleteManyArgs>;

export default CompanyAliasDeleteManyArgsSchema;

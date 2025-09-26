import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompanyUpdateManyMutationInputSchema'
import { CompanyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompanyUncheckedUpdateManyInputSchema'
import { CompanyWhereInputSchema } from '../inputTypeSchemas/CompanyWhereInputSchema'

export const CompanyUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyUpdateManyMutationInputSchema,CompanyUncheckedUpdateManyInputSchema ]),
  where: CompanyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.CompanyUpdateManyAndReturnArgs>;

export default CompanyUpdateManyAndReturnArgsSchema;

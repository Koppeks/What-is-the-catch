import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClauseCategoryUpdateManyMutationInputSchema'
import { ClauseCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClauseCategoryUncheckedUpdateManyInputSchema'
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'

export const ClauseCategoryUpdateManyArgsSchema: z.ZodType<Prisma.ClauseCategoryUpdateManyArgs> = z.object({
  data: z.union([ ClauseCategoryUpdateManyMutationInputSchema,ClauseCategoryUncheckedUpdateManyInputSchema ]),
  where: ClauseCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseCategoryUpdateManyArgs>;

export default ClauseCategoryUpdateManyArgsSchema;

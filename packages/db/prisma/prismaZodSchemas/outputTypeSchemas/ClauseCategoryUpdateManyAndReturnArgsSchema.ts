import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClauseCategoryUpdateManyMutationInputSchema'
import { ClauseCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClauseCategoryUncheckedUpdateManyInputSchema'
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'

export const ClauseCategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseCategoryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseCategoryUpdateManyMutationInputSchema, ClauseCategoryUncheckedUpdateManyInputSchema ]),
  where: ClauseCategoryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ClauseCategoryUpdateManyAndReturnArgsSchema;

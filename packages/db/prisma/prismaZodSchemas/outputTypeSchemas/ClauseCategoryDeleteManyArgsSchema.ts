import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryWhereInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereInputSchema'

export const ClauseCategoryDeleteManyArgsSchema: z.ZodType<Prisma.ClauseCategoryDeleteManyArgs> = z.object({
  where: ClauseCategoryWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ClauseCategoryDeleteManyArgsSchema;

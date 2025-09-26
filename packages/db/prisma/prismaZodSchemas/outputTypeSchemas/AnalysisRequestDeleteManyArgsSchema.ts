import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestWhereInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereInputSchema'

export const AnalysisRequestDeleteManyArgsSchema: z.ZodType<Prisma.AnalysisRequestDeleteManyArgs> = z.object({
  where: AnalysisRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestDeleteManyArgs>;

export default AnalysisRequestDeleteManyArgsSchema;
